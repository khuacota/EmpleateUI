import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth/auth.service';
import { Regex } from '../../../models/regex';
import { RegisterService } from '../../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, public servAuth: AuthService, public serv: RegisterService, private route: Router) {
    this.RegisterForm = this.fb.group({
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

      Role: ['',
        Validators.required]
    });
  }
  ngOnInit() {
  }

  register() {
    let register = this.RegisterForm.value;
    this.serv.post(register).subscribe(res => {
      this.snackBar.open("Registrado exitosamente", "", {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
        this.servAuth.post(register).subscribe(res => {
          this.snackBar.open("Logeado", "", {
            duration: 2000,
            panelClass: ['green-snackbar']
          });
          sessionStorage.setItem("EmpleateJWT", res.token);
          if (register.Role == 'company') {
            this.route.navigate(['/empresa/RegistroEmpresa']);
          }
          else {
            this.route.navigate(['/empleado/InformacionBasica']);
          }
        }, error => {
          this.snackBar.open("ocurrio un error " + error.originalError, "", {
            duration: 2000,
            panelClass: ['red-snackbar']
          });
        });
    }, error => {
      this.snackBar.open("ocurrio un error " + error.originalError, "", {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
    });
  }

}
