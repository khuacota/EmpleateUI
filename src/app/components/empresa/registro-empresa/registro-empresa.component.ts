
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from '../../../models/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { MatSnackBar } from '@angular/material';

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
  empresaForm: FormGroup;

  constructor(private fb: FormBuilder, private service: EmpresaService, public snackBar: MatSnackBar) {
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
    let empresa = new Empresa();
    empresa.Nombre = nombre;
    empresa.Descripcion = descripcion;
    empresa.Rubro = rubro;
    empresa.Direccion = direccion;
    empresa.Telefono = parseInt(telefono);
    empresa.Correo = correo;
    empresa.Imagen = imagen;
    empresa.Url = web;
    empresa.Imagen = imagen;
    this.service.postEmpresa(empresa).subscribe(res => {
      this.snackBar.open("registro completado correctamente", "", {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
    }, error => {
      this.snackBar.open("error", "", {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
      console.log(error);
    });
  }
}
