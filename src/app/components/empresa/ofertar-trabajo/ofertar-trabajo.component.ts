import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ofertar-trabajo',
  templateUrl: './ofertar-trabajo.component.html',
  styleUrls: ['./ofertar-trabajo.component.css']
})
export class OfertarTrabajoComponent implements AfterViewInit {

  @ViewChild(InputLanguagesComponent) languageChild;
  private languages = [];

  @ViewChild(InputSkillsComponent) skillChild;
  private skills = [];

  expForm: FormGroup;
  today =  new Date();
  minDate = new Date(this.today.setDate(this.today.getDate() + 1));

  constructor(private fb: FormBuilder) {

    this.expForm = this.fb.group({
      profesion: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])],

      descripcion: ['', Validators.required],

      ciudad: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])],

      inicio: ['', Validators.required],
      fin: ['', Validators.required], 
      
      experiencia:['5',Validators.compose([
        Validators.min(0),
        Validators.max(20),
        Validators.required,
        ])],

      limite: ['', Validators.required],


    });

  }

/*
  ngOnInit() {
  }*/

  ngAfterViewInit() {
    this.languages = this.languageChild.languages;
    this.skills = this.skillChild.skills;
  }

  sumit(){
    //let languages: Language[] = [];
  }

}