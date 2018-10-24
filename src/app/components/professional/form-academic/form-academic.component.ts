import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";


@Component({
  selector: 'app-form-academic',
  templateUrl: './form-academic.component.html',
  styleUrls: ['./form-academic.component.css']
})
export class FormAcademicComponent implements AfterViewInit {
  @ViewChild(InputLanguagesComponent) languageChild;
  private languages = [];
	constructor(){}
  ngAfterViewInit() {
    this.languages = this.languageChild.languages;
  }
}
