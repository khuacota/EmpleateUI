import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Regex } from '../../../../models/regex';

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
      Place: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.ALPHANUMERIC)
      ])],
      Position: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.ALPHABETIC)
      ])],
      Start: ['', Validators.required],
      End: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
