import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.css']
})
export class PostulantsComponent implements OnInit {
  offerId: string;
  offer: any;
  employeeId: number;
  employee: any;

  constructor() {
  }

  ngOnInit() {
  }

}
