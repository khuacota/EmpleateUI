import { Component, OnInit } from '@angular/core';
import { ProfesionService } from '../../services/profesiones/profesion.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {
  profesionales: Array<any>;
  error: Boolean;
  constructor(private service: ProfesionService) {
    this.error = false;
  }

  ngOnInit() {
  }

  buscarProfesionales(value: string) {
    this.service.getProfesionalesByProfesion(value).subscribe(
      response => {
        this.profesionales = response;
        this.error = false;
      }, error => {
        this.profesionales = [];
        this.error = true;
      }
    );
  }

}
