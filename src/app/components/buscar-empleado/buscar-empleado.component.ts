import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {
  profesionales: Array<any>;
  error: Boolean;
  constructor() {
    this.error = false;
  }

  ngOnInit() {
  }
  buscarProfesionales(value: string) {
    
  }

}
