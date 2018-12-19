import { Component, OnInit } from '@angular/core';
import { BasicInformationService } from '../../../services/employee/basic-information.service';
import { BasicEmployee } from '../../../models/basicEmployee';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OccupationEmp } from '../../../models/occupationEmp';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
  private offerId;
  constructor(private serviceEmployee: JobOfferService, private _formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router) {
    this.error = false;
    this.notfound = false;
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
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.offerId = params.get('id')
      )
    ).subscribe(res => {
      this.serviceEmployee.getpostulants(this.offerId).subscribe(res => {
        this.proffesionals = res;
        console.log(this.proffesionals)
        
      });
    });
    }

}

