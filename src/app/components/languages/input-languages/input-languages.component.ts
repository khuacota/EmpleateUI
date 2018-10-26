
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-input-languages',
  templateUrl: './input-languages.component.html',
  styleUrls: ['./input-languages.component.scss']
})
export class InputLanguagesComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguages: Observable<string[]>;
  languages: string[] = ['español','ingles'];
  alllanguages: string[] = ['español', 'ingles', 'frances', 'ruso'];

  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredLanguages = this.languageCtrl.valueChanges.pipe(
        startWith(null),
        map((language: string | null) => language ? this._filter(language) : this.alllanguages.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add language only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our language
      if ((value || '').trim()) {
        if (this.alllanguages.includes(value.trim()) && !this.languages.includes(value.trim())) {
          this.languages.push(value.trim());
        }
        
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.languageCtrl.setValue(null);
    }
  }

  remove(language: string): void {
    const index = this.languages.indexOf(language);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.languages.includes(event.option.viewValue)) {

      this.languages.push(event.option.viewValue);
    }
    this.languageInput.nativeElement.value = '';
    this.languageCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alllanguages.filter(language => language.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

}
