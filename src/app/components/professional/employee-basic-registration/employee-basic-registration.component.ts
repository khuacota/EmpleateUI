import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicInformationService } from '../../../services/employee/basic-information.service';
import { Employee } from '../../../models/employee';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-basic-registration',
  templateUrl: './employee-basic-registration.component.html',
  styleUrls: ['./employee-basic-registration.component.css']
})
export class EmployeeBasicRegistrationComponent implements OnInit {
  isLinear = false;
  employeeForm: FormGroup;
  submiting: boolean = false;
  today = new Date();
  maxDate = new Date(this.today.setDate(this.today.getDate() - (18*366)));


  constructor(private route: Router, private _formBuilder: FormBuilder, private servAuth: AuthService, private service: BasicInformationService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.employeeForm = this._formBuilder.group({
      Name: ['', Validators.compose([
        Validators.required
      ])],
      LastName: ['', Validators.compose([
        Validators.required
      ])],
      Birthdate: ['', Validators.compose([
        Validators.required
        
      ])],
     
       CivilStatus: ['', Validators.compose([
         Validators.required
         
      ])],

       Gender: ['', Validators.compose([
         Validators.required
         
      ])],

       Address: ['', Validators.compose([
         Validators.required
       ])],

      City: ['', Validators.compose([
        Validators.required
      ])],
    
       Phone: ['', Validators.compose([
         Validators.required, Validators.max(99999999), Validators.min(9999999)

      ])],

      Email: ['', Validators.compose([Validators.required, Validators.email])],

      Img: ['', Validators.compose([
        Validators.required
      ])]
     });

  }

  disabled() {
    return this.employeeForm.invalid || this.submiting;
  }
  
 
  submit() {
    this.submiting = true;
    let empleado = new Employee();
    empleado.Name = this.employeeForm.get('Name').value;
    empleado.LastName = this.employeeForm.get('LastName').value;
    empleado.Birthdate = this.employeeForm.get('Birthdate').value;
    empleado.Gender = this.employeeForm.get('Gender').value;
    empleado.CivilStatus = this.employeeForm.get('CivilStatus').value;
    empleado.Phone = this.employeeForm.get('Phone').value;
    empleado.City = this.employeeForm.get('City').value;
    empleado.Direction = this.employeeForm.get('Address').value;
    empleado.Email = this.employeeForm.get('Email').value;
    empleado.Image = this.employeeForm.get('Img').value;
    if (this.servAuth.user) {
      empleado.IdUser = this.servAuth.user.userId;
    }
    else {
      empleado.IdUser = this.servAuth.getUser().userId;
    }
    this.service.post(empleado).subscribe(res => {
      this.snackBar.open("registro completado correctamente", "", {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
      this.route.navigate(['/empleado/InformacionAcademica']);
    }, error => {
      this.snackBar.open("error " + error.originalError, "", {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
      this.submiting = false;
    });
  }
  onFileSelected(event) {
  }

}
