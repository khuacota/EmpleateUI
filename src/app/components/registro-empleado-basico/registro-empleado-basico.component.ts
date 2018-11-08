import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpleadoService } from '../../../services/empleado/informacion-basica.service';
import { Empleado } from '../../../models/empleado';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-registro-empleado-basico',
  templateUrl: './registro-empleado-basico.component.html',
  styleUrls: ['./registro-empleado-basico.component.css']
})
export class RegistroEmpleadoBasicoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  empleadoForm: FormGroup;


  constructor(private _formBuilder: FormBuilder, private service: EmpleadoService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      //firstCtrl: ['',Validators.required],
      nombreEmpleado: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]+')
      ])],
      apellidoEmpleado: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]+')
      ])],
      fechaNacimiento: ['', Validators.compose([
        Validators.required,
        //Validators.pattern('[a-zA-Z0-9 ]+')
      ])],
     
       estadoCivil: ['', Validators.compose([
         Validators.required,
         Validators.pattern('[a-zA-Z0-9 ]+')
       ])],
       sexo: ['', Validators.compose([
         Validators.required,
         Validators.pattern('[a-zA-Z0-9 ]+')
       ])],
       direccion: ['', Validators.compose([
         Validators.required

       ])],
    
       telefonoCelular: ['', Validators.compose([
         Validators.required, Validators.max(99999999), Validators.min(9999999)

      ])],

      email: ['', Validators.compose([Validators.required, Validators.email])],

      img: ['', Validators.compose([
        Validators.required
      ])]
     });

  }
  

  /*getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }*/
  submit() {
    console.log(this.firstFormGroup.value);
    var Nombre: string = this.firstFormGroup.get('nombreEmpleado').value;
    var Apellidos: string = this.firstFormGroup.get('apellidoEmpleado').value;
    var FechaNacimiento: Date = this.firstFormGroup.get('fechaNacimiento').value;
    var Genero: string = this.firstFormGroup.get('sexo').value;
    var EstadoCivil: string = this.firstFormGroup.get('estadoCivil').value;
    var Celular: number = this.firstFormGroup.get('numeroTelefono').value;
    var Ciudad: string = this.firstFormGroup.get('ciudad').value;
    var Direccion: string = this.firstFormGroup.get('direccion').value;
    var Correo: string = this.firstFormGroup.get('email').value;
    var Imagen: string = this.firstFormGroup.get('img').value;

    let empleado = new Empleado();
    empleado.Nombre = Nombre;
    empleado.Apellidos = Apellidos;
    empleado.FechaNacimiento = FechaNacimiento;
    empleado.Genero = Genero;
    empleado.EstadoCivil = EstadoCivil;
    empleado.Celular = Number(Celular);
    empleado.EstadoCivil = EstadoCivil;
    empleado.Ciudad = Ciudad;
    empleado.Direccion = Direccion;
    empleado.Correo = Correo;
    empleado.Imagen = Imagen;
    
    this.service.postEmpleado(empleado).subscribe(res => {
      this.snackBar.open("registro completado correctamente", "", {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
    }, error => {
      this.snackBar.open("error", "", {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
    });
  }
  disable() {
    return false;
  }
  onFileSelected(event) {
    console.log(event);
  }

}
