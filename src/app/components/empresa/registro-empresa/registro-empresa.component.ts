
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {


  foods: Food[] = [
    { value: 'Alimenticio', viewValue: 'Alimenticio' },
    { value: 'Automovilistico', viewValue: 'Automovilistico' },
    { value: 'Social', viewValue: 'Social' },
    { value: 'Software', viewValue: 'Software' },
    { value: 'Limpieza', viewValue: 'Limpieza' },
    { value: 'Hardware', viewValue: 'Hardware' }
  ];

  @ViewChild(InputLanguagesComponent) languageChild;
  private languages = [];

  @ViewChild(InputSkillsComponent) skillChild;
  private skills = [];
  empresaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empresaForm = this.fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]+')
      ])],
      telefono: ['', Validators.compose([
        Validators.required, Validators.max(99999999), Validators.min(9999999)

      ])],
      descripcion: ['', Validators.compose([
        Validators.required

      ])],

      rubro: ['', Validators.compose([
        Validators.required
      ])],

      direccion: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])],


      correo: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")
      ])],

      imagen: ['', Validators.compose([
        Validators.required
      ])],

      url: ['', Validators.compose([
        Validators.pattern("(http://|https://)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?")
      ])]

      //  Inicio: ['', Validators.required],
      //  Fin: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  registrar() {
    var nombre: string = this.empresaForm.get('nombre').value;
    var descripcion: string = this.empresaForm.get('descripcion').value;
    var rubro: string = this.empresaForm.get('rubro').value;
    var direccion: string = this.empresaForm.get('direccion').value;
    var telefono: string = this.empresaForm.get('telefono').value;
    var correo: string = this.empresaForm.get('correo').value;
    var web: string = this.empresaForm.get('url').value;
    var imagen: string = this.empresaForm.get('imagen').value;
    
    console.log(this.empresaForm.value);
  }
}
