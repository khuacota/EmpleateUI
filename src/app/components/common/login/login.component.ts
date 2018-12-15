import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Regex } from '../../../models/regex';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  expForm: FormGroup;
  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.expForm = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.EMAIL)
      ])],

      Password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],

      ConfirmPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],

    });
  }

  ngOnInit() {
  }

}
