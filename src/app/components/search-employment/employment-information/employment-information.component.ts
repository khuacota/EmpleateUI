import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-employment-information',
  templateUrl: './employment-information.component.html',
  styleUrls: ['./employment-information.component.css']
})
export class EmploymentInformationComponent implements OnInit {
  offerId: string;
  offer: any;
  employeeId: number;
  constructor(private route: ActivatedRoute, private router: Router, private jobService: JobOfferService) {
    this.employeeId = 1;
    this.offerId = '1';
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.offerId = params.get('id')
      )
    );
    this.jobService.getOne(this.offerId).subscribe(res => {
      this.offer = res;
    });
  }

  ngOnInit() {
  }

  postulate() {
    let body = { OfferId: this.offerId, EmployeeId: this.employeeId };
    this.jobService.postulate(body).subscribe();
  }

}
