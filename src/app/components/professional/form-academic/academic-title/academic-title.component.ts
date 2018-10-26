import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      grado: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  

}
