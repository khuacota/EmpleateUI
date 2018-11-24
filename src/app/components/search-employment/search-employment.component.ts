import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { OfertaTrabajoService } from '../../services/ofertatrabajo/oferta-trabajo.service';

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
  constructor(private service: OfertaTrabajoService,private formBuilder: FormBuilder,){
  	this.error = false;
    this.searchFormGroup = this.formBuilder.group({      
      searchWord: ['',Validators.required]});
  }


  searchEmployment() {
  	this.service.getOffersByCompany(this.searchFormGroup.value.searchWord).subscribe(
  		response => {
  			this.offers = response;
  			console.log(this.offers);
  			this.error = false;
  			}, error => {
        this.offers = [];
        this.error = true;
      }
  	);
  }


}
