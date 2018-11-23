import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { InformacionBasicaService } from '../../services/empleado/informacion-basica.service';
import { Empleado } from '../../models/empleado';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-registro-empleado-basico',
  templateUrl: './registro-empleado-basico.component.html',
  styleUrls: ['./registro-empleado-basico.component.css']
})
export class RegistroEmpleadoBasicoComponent implements OnInit {
  isLinear = false;
  employeeForm: FormGroup;


  constructor(private _formBuilder: FormBuilder, private service: InformacionBasicaService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.employeeForm = this._formBuilder.group({
      //firstCtrl: ['',Validators.required],
      Name: ['', Validators.compose([
        Validators.required,
        //Validators.pattern('[a-zA-Z0-9 ]+')
      ])],
      LastName: ['', Validators.compose([
        Validators.required,
        //Validators.pattern('[a-zA-Z0-9 ]+')
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
         Validators.required,
         //Validators.pattern('[a-zA-Z0-9 ]+')
       ])],

      City: ['', Validators.compose([
        Validators.required,
        //Validators.pattern('[a-zA-Z0-9 ]+')
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
  

  /*getErrorMessage() {
    return this.Email.hasError('required') ? 'You must enter a value' :
      this.Email.hasError('Email') ? 'Not a valid Email' :
        '';
  }*/
  submit() {

    let empleado = new Empleado();
    empleado.Nombre = this.employeeForm.get('Name').value;
    empleado.Apellidos = this.employeeForm.get('LastName').value;
    empleado.FechaNacimiento = this.employeeForm.get('Birthdate').value;
    empleado.Genero = this.employeeForm.get('Gender').value;
    empleado.EstadoCivil = this.employeeForm.get('CivilStatus').value;
    empleado.Celular = this.employeeForm.get('Phone').value;
    empleado.Ciudad = this.employeeForm.get('City').value;
    empleado.Direccion = this.employeeForm.get('Address').value;
    empleado.Correo = this.employeeForm.get('Email').value;
    empleado.Imagen = this.employeeForm.get('Img').value;

    console.log(empleado);
    this.service.post(empleado).subscribe(res => {
      this.snackBar.open("registro completado correctamente", "", {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
      console.log("aqui");
    }, error => {
      this.snackBar.open("error", "", {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
    });
  }
  onFileSelected(event) {
    console.log(event);
  }

}
