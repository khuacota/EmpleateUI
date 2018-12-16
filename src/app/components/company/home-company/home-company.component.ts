import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

  error: Boolean;
  offers: Array<any>;

  constructor(public router: Router,) {
  	this.error = false;
  	this.offers = [];
  }

  ngOnInit() {
  }

}
