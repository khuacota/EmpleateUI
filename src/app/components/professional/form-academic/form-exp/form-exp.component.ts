import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exp',
  templateUrl: './form-exp.component.html',
  styleUrls: ['./form-exp.component.css']
})
export class FormExpComponent implements OnInit {
  private myExperiences: Array<any>;
  constructor() {
    this.myExperiences = [];
  }

  ngOnInit() {
  }

  addExperience() {
    let obj = { degree: "", description: "" };
    this.myExperiences.push(obj);
  }
}
