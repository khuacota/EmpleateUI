import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-exp',
  templateUrl: './form-exp.component.html',
  styleUrls: ['./form-exp.component.css']
})
export class FormExpComponent implements OnInit {
  expForm: FormGroup;
  today = new Date();
  maxDate = new Date(this.today.setDate(this.today.getDate() - 1));
  constructor(private fb: FormBuilder) {
    this.expForm = this.fb.group({
      Lugar: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]*')
      ])],
      Cargo: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])],
      Inicio: ['', Validators.required],
      Fin: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
