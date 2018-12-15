import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Regex } from '../../../models/regex';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, public serv: AuthService) {
    this.loginForm = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.EMAIL)
      ])],

      Password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      

    });
  }

  ngOnInit() {
  }

  login() {
    let login = this.loginForm.value;
    this.serv.post(login).subscribe(res => {
      this.snackBar.open("Logeado", "", {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
    }, error => {
      this.snackBar.open("ocurrio un error", "", {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
    });
  }

}
