import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { AcademicTitleComponent } from "./academic-title/academic-title.component";
import { FormExpComponent } from "./form-exp/form-exp.component";


@Component({
  selector: 'app-form-academic',
  templateUrl: './form-academic.component.html',
  styleUrls: ['./form-academic.component.css']
})
export class FormAcademicComponent implements AfterViewInit {
  @ViewChild(InputLanguagesComponent) languageChild;
  @ViewChildren(AcademicTitleComponent) viewTitles: QueryList<AcademicTitleComponent>;
  @ViewChildren(FormExpComponent) viewExps: QueryList<FormExpComponent>;
  private languages = [];
  private myTitles: Array<any>;
  private myExperiences: Array<any>;

  constructor() {
    this.myTitles = [];
    this.myExperiences = [];
  }

  ngAfterViewInit() {
    this.languages = this.languageChild.languages;
  }

  
  addTitle() {
    let obj = { degree: "", description: "" };
    this.myTitles.push(obj);
  }

  addExperience() {
    let obj = { degree: "", description: "" };
    this.myExperiences.push(obj);
  }

  submit() {
    console.log(this.viewTitles);
  }
}
