import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AcademicService } from '../../../services/academic/academic.service';


@Component({
  selector: 'app-employment-information',
  templateUrl: './employment-information.component.html',
  styleUrls: ['./employment-information.component.css']
})
export class EmploymentInformationComponent implements OnInit {
  offerId: string;
  offer: any;
  employeeId: number;
  invalid: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router, private acService: AcademicService, private jobService: JobOfferService) {
    this.employeeId = 1;
    this.offerId = '1';
    this.offer = {};
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

  ngOnInit() {
    this.acService.getOne(this.employeeId).subscribe(res => {
      console.log(res);
    });
  }
  

  postulate() {
    let body = { OfferId: this.offerId, EmployeeId: this.employeeId };
    
    this.jobService.postulate(body).subscribe(res => {
      if (res.degrees.length == 0 && res.experience.length == 0 &&
        res.languages.length == 0 && res.occupations.length == 0 && res.skills.length == 0) {
        this.invalid = true;
      }
      else {
        this.invalid = false;
      }
    }, error => {
    });
  }

}
