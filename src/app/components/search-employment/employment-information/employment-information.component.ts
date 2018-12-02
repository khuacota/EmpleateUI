import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-employment-information',
  templateUrl: './employment-information.component.html',
  styleUrls: ['./employment-information.component.css']
})
export class EmploymentInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
