import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-input-skills',
  templateUrl: './input-skills.component.html',
  styleUrls: ['./input-skills.component.css']
})

export class InputSkillsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = ['liderazgo'];
  allskills: string[] = ['liderazgo', 'java', 'angular', 'linux'];

  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {

  	this.filteredSkills = this.skillCtrl.valueChanges.pipe(
        startWith(null),
        map((skill: string | null) => skill ? this._filter(skill) : this.allskills.slice()));

  }

  add(event: MatChipInputEvent): void {
    // Add language only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our language
      if ((value || '').trim()) {
        this.skills.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.skillCtrl.setValue(null);
    }
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.skills.includes(event.option.viewValue)) {
       this.skills.push(event.option.viewValue);
    }
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allskills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

}
