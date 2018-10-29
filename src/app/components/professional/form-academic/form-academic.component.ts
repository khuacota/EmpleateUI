import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { AcademicTitleComponent } from "./academic-title/academic-title.component";
import { FormExpComponent } from "./form-exp/form-exp.component";
import { Experience } from '../../../models/experience';
import { Title } from '../../../models/title';
import { Language } from '../../../models/language';
import { Academic } from '../../../models/academic';


@Component({
  selector: 'app-form-academic',
  templateUrl: './form-academic.component.html',
  styleUrls: ['./form-academic.component.css']
})
export class FormAcademicComponent implements AfterViewInit {
  @ViewChild(InputLanguagesComponent) languageChild;
  @ViewChildren(AcademicTitleComponent) viewTitles: QueryList<AcademicTitleComponent>;
  @ViewChildren(FormExpComponent) viewExps: QueryList<FormExpComponent>;
  private myTitles: Array<any>;
  private myExperiences: Array<any>;

  constructor() {
    this.myTitles = [];
    this.myExperiences = [];
  }

  ngAfterViewInit() {
  }

  
  addTitle() {
    let obj = { degree: "", description: "" };
    this.myTitles.push(obj);
  }

  addExperience() {
    let obj = { degree: "", description: "" };
    this.myExperiences.push(obj);
  }

  disabled() {
    if (this.viewTitles) {

      let titles = this.viewTitles.toArray();
      let exps = this.viewExps.toArray();
      let res = titles.length < 1 || this.languageChild.languages.length < 1;
      return res || titles.some(e => e.academicForm.invalid) || exps.some(e => e.expForm.invalid);
    }
    return true;
  }

  submit() {
    let titles = this.viewTitles.toArray();
    let exps = this.viewExps.toArray();
    let experiences: Experience[] = [];
    let titulos: Title[] = [];
    let languages: Language[] = [];
    for (let i = 0; i < exps.length; i++) {
      let exp = exps[i].expForm.value;
      exp.EmpleadoId = 1;
      experiences.push(exp);
    }
    for (let i = 0; i < titles.length; i++) {
      let title = titles[i].academicForm.value;
      title.EmpleadoId = 1;
      titulos.push(title);
    }
    for (let i = 0; i < this.languageChild.languages.length; i++) {
      let language = new Language();
      language.idioma = this.languageChild.languages[i];
      language.EmpleadoId = 1;
      languages.push(language);
    }
    let academic = new Academic();
    academic.EmpleadoId = 1;
    academic.Experiencias = experiences;
    academic.Idiomas = languages;
    academic.Titulos = titulos;
    console.log(academic);
  }
}
