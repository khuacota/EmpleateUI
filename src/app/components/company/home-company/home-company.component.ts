import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router, RouterModule, Routes } from '@angular/router';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

  error: Boolean;
  offers: Array<any>;
  companyName: string;

  constructor(public router: Router, private service: JobOfferService, private servAuth: AuthService) {
  	this.error = false;
  	this.offers = [];  
    this.companyName = "Jala";     
  }

  ngOnInit() {
    this.servAuth.getCompany().subscribe((res: any) => {
      this.companyName = res[0].name;
      this.searchEmployment();
    })
    
  }

  searchEmployment() {
    this.service.getOffersByCompany(this.companyName).subscribe(
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
