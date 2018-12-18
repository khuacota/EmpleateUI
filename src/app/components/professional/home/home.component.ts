import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recentOffers: Array<any>;

  constructor(private service: JobOfferService, public router: Router) {  
    this.recentOffers = [];    
  }

  ngOnInit() {
  }

  searchRecent() {
  	this.service.getRecentOffers().subscribe(
  		response => {
        this.recentOffers = response;  			
  			},
  	);
  }

  

}
