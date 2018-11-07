import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-title',
  templateUrl: './academic-title.component.html',
  styleUrls: ['./academic-title.component.scss']
})
export class AcademicTitleComponent implements OnInit {
	private degrees = ['licenciatura','master','doctorado'];
	private myTitles:Array<any>;
  constructor() { 
  	this.myTitles = [];
  }

  ngOnInit() {
  }

  addTitle() {
  	let obj = {degree:"",description:""};
  	this.myTitles.push(obj);
  }

}
