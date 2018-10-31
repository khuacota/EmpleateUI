import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";

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

  constructor() {

  }

/*
  ngOnInit() {
  }*/

  ngAfterViewInit() {
    this.languages = this.languageChild.languages;
    this.skills = this.skillChild.skills;
  }

}
