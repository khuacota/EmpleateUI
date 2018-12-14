import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-search-employment',
  templateUrl: './search-employment.component.html',
  styleUrls: ['./search-employment.component.css']
})
export class SearchEmploymentComponent implements OnInit {

  ngOnInit() {
  }

  offers: Array<any>;
  error: Boolean;
  searchFormGroup:FormGroup;
  constructor(private service: JobOfferService,private formBuilder: FormBuilder,){
  	this.error = false;
    this.offers = [];
    this.searchFormGroup = this.formBuilder.group({      
      searchWord: ['',Validators.required]});
  }


  searchEmployment() {
  	this.service.getOffersByCompany(this.searchFormGroup.value.searchWord).subscribe(
  		response => {
        this.offers = response;
  			this.error = this.offers.length == 0;
  			}, error => {
        this.offers = [];
        this.error = true;
      }
  	);
  }
}
