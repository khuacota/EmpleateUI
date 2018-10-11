import { Component, OnInit } from '@angular/core';
import { ProfesionService } from '../../services/profesiones/profesion.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {
  profesionales: any;
  constructor(private service: ProfesionService) { }

  ngOnInit() {
  }
  searchCourses(value: string) {
    this.service.getProfesionalesByProfesion(value).subscribe(
      response => {
        this.profesionales = response;
        console.log(this.profesionales);
      }
    );
  }

}
