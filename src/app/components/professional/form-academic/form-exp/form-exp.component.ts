import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-exp',
  templateUrl: './form-exp.component.html',
  styleUrls: ['./form-exp.component.css']
})
export class FormExpComponent implements OnInit {
  expForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.expForm = this.fb.group({
      lugar: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]*')
      ])],
      cargo: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])],
      inicio: ['', Validators.required],
      fin: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
