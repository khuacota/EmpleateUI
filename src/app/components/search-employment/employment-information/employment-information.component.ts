import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AcademicService } from '../../../services/academic/academic.service';
import { Academic } from '../../../models/academic';


@Component({
  selector: 'app-employment-information',
  templateUrl: './employment-information.component.html',
  styleUrls: ['./employment-information.component.css']
})
export class EmploymentInformationComponent implements OnInit {
  offerId: string;
  offer: any;
  employeeId: number;
  employee: any;
  constructor(private route: ActivatedRoute, private router: Router, private acService: AcademicService, private jobService: JobOfferService) {
    this.employeeId = 1;
    this.offerId = '1';
    this.offer = {};
    this.employee = {};
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.offerId = params.get('id')
      )
    ).subscribe(res => {
      this.jobService.getOne(this.offerId).subscribe(res => {
        this.offer = res;
      });
    });
    
  }

  isInvalid() {
    return this.employee.degrees.length == 0 && this.employee.experiences.length == 0 &&
      this.employee.languages.length == 0 && this.employee.occupations.length == 0 &&
      this.employee.skills.length == 0;
  }

  ngOnInit() {
    this.acService.getOne(this.employeeId).subscribe(res => {
      this.employee = res;
    });
  }
  

  postulate() {
    let body = { OfferId: this.offerId, EmployeeId: this.employeeId };
    
    this.jobService.postulate(body).subscribe(res => {
      
    }, error => {
    });
  }

}
