import { Component, OnInit } from '@angular/core';
import { BasicInformationService } from '../../../services/employee/basic-information.service';
import { BasicEmployee } from '../../../models/basicEmployee';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OccupationEmp } from '../../../models/occupationEmp';

@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.css']
})
export class PostulantsComponent implements OnInit {
  private proffesionals: Array<BasicEmployee>;
  private error: boolean;
  private searchForm: FormGroup;
  public notfound: boolean;
  constructor(private serviceEmployee: BasicInformationService, private _formBuilder: FormBuilder) {
    this.error = false;
    this.notfound = true;
    let empp = new BasicEmployee();
    empp.Occupations = [new OccupationEmp(), new OccupationEmp(),
    new OccupationEmp()];
    this.proffesionals = [];
    this.searchForm = this._formBuilder.group({
      Searched: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }
  searchEmployees() {
    this.serviceEmployee.getFilterEmployees(this.searchForm.value.Searched).subscribe((res: Array<BasicEmployee>) => {
      this.proffesionals = res;
      if (this.proffesionals.length == 0) {
        this.notfound = true;
      }
    }, error => {
    });
  }

}

