import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from '../../../../models/regex';

@Component({
  selector: 'app-academic-title',
  templateUrl: './academic-title.component.html',
  styleUrls: ['./academic-title.component.scss']
})
export class AcademicTitleComponent implements OnInit {
  private degrees = ['licenciatura', 'master', 'doctorado'];
  academicForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.academicForm = this.fb.group({
      Degree: ['', Validators.required],
      Description: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.ALPHANUMERIC)
      ])]
    });
  }

  ngOnInit() {
  }
  

}
