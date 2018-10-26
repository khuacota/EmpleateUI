import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";

@Component({
  selector: 'app-ofertar-trabajo',
  templateUrl: './ofertar-trabajo.component.html',
  styleUrls: ['./ofertar-trabajo.component.css']
})
export class OfertarTrabajoComponent implements AfterViewInit {

  /**visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguages: Observable<string[]>;
  languages: string[] = ['español'];
  alllanguages: string[] = ['español', 'ingles', 'frances', 'ruso', 'quechua', 'aymara', 'guarani'];

  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;*/
  @ViewChild(InputLanguagesComponent) languageChild;
  private languages = [];

  @ViewChild(InputSkillsComponent) skillChild;
  private skills = [];

  constructor() {

  	/**this.filteredLanguages = this.languageCtrl.valueChanges.pipe(
        startWith(null),
        map((language: string | null) => language ? this._filter(language) : this.alllanguages.slice()));*/
  }

  /*add(event: MatChipInputEvent): void {
    // Add language only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our language
      if ((value || '').trim()) {
        this.languages.push(value.trim());
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
    this.languages.push(event.option.viewValue);
    this.languageInput.nativeElement.value = '';
    this.languageCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alllanguages.filter(language => language.toLowerCase().indexOf(filterValue) === 0);
  }*/
/*
  ngOnInit() {
  }*/

  ngAfterViewInit() {
    this.languages = this.languageChild.languages;
    this.skills = this.skillChild.skills;
  }

}
