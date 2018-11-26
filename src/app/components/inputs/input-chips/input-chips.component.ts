import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input-chips',
  templateUrl: './input-chips.component.html',
  styleUrls: ['./input-chips.component.scss']
})
export class InputChipsComponent implements OnInit {

  @Input() label: string;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @Input() strict: boolean = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemCtrl = new FormControl();
  filteredItems: Observable<string[]>;
  @Input() items: string[] = [];
  @Input() allItems: string[] = [];
  @Input() minElements: number;

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((language: string | null) => language ? this._filter(language) : this.allItems.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add language only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our language
      if ((value || '').trim()) {
        if (this.allItems.includes(value.trim()) && !this.items.includes(value.trim())) {
          this.items.push(value.trim());
        }
        if (!this.strict && !this.items.includes(value.trim())) {
          this.items.push(value.trim());
        }
          
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.itemCtrl.setValue(null);
    }
  }

  remove(language: string): void {
    const index = this.items.indexOf(language);

    if (index >= 0 && this.items.length > this.minElements) {
      this.items.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.items.includes(event.option.viewValue)) {

      this.items.push(event.option.viewValue);
    }
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allItems.filter(language => language.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

}
