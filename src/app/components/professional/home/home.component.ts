import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recentOffers: Array<any>;
  employee;

  constructor(private service: JobOfferService, public router: Router, private servAuth: AuthService) {  
    this.recentOffers = [];    
  }

  ngOnInit() {
    this.servAuth.getEmploye().subscribe(res => {
      this.employee = res[0];
    });
    this.searchRecent();
  }



  searchRecent() {
  	this.service.getRecentOffers().subscribe(
  		response => {
        this.recentOffers = response;  			
  			},
  	);
  }

  logoutSer() {
    this.servAuth.logout();
    window.location.reload();
  }  

}
