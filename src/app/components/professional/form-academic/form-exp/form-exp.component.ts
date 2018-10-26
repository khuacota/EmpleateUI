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
      lugar: ['', Validators.required],
      cargo: ['', Validators.required],
      inicio: [new Date(), Validators.required],
      fin: [new Date(), Validators.required],
    });
  }

  ngOnInit() {
  }

}
