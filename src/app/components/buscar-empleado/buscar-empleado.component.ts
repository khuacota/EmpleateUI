import { Component, OnInit } from '@angular/core';
import { BasicInformationService } from '../../services/employee/basic-information.service';
import { BasicEmployee } from '../../models/basicEmployee';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OccupationEmp } from '../../models/occupationEmp';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {
  private proffesionals: Array<BasicEmployee>;
  private error: Boolean;
  private searchForm: FormGroup;
  constructor(private serviceEmployee: BasicInformationService, private _formBuilder: FormBuilder) {
    this.error = false;
    let empp = new BasicEmployee();
    empp.Occupations = [new OccupationEmp(), new OccupationEmp(),
      new OccupationEmp()];
    empp.Occupations[0].Occupation = 'esto';

    empp.Occupations[1].Occupation = 'esaato';

    empp.Occupations[2].Occupation = 'escdesto';
    empp.Name = "pepe";
    empp.City = "ciudad";
    empp.Email = "asdf@asdf.com";
    empp.Id = 1;
    this.proffesionals = [empp, empp];
    this.searchForm = this._formBuilder.group({
      Searched: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }
  searchEmployees() {
    this.serviceEmployee.getFilterEmployees().subscribe((res: Array<BasicEmployee>) => {
      this.proffesionals = res;
    }, error => {
    });
  }

}
