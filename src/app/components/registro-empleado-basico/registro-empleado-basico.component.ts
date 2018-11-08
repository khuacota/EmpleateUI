import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


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


  constructor(private _formBuilder: FormBuilder) {

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
  }
  disable() {
    return false;
  }
  onFileSelected(event) {
    console.log(event);
  }

}
