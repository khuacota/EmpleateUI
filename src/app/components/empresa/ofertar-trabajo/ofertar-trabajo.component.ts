import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LanguageJob } from '../../../models/language';
import { Skill } from '../../../models/skill';
import { OfertaTrabajo } from '../../../models/ofertaTrabajo';
import { OfertaTrabajoService } from '../../../services/ofertatrabajo/oferta-trabajo.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ofertar-trabajo',
  templateUrl: './ofertar-trabajo.component.html',
  styleUrls: ['./ofertar-trabajo.component.css']
})
export class OfertarTrabajoComponent implements AfterViewInit {

  @ViewChild(InputLanguagesComponent) languageChild;
  //private languages = [];

  @ViewChild(InputSkillsComponent) skillChild;
  //private skills = [];

  private userId: number;

  expForm: FormGroup;
  today =  new Date();
  minDate = new Date(this.today.setDate(this.today.getDate() + 1));

  constructor(private fb: FormBuilder,private ofertaServ: OfertaTrabajoService, public snackBar: MatSnackBar) {

    this.expForm = this.fb.group({
      Profesion: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])],

      Descripcion: ['', Validators.required],

      Ciudad: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])],

      HoraInicio: ['', Validators.required],
      HoraFin: ['', Validators.required], 
      
      ExperienciaMin:['5',Validators.compose([
        Validators.min(0),
        Validators.max(20),
        Validators.required,
        ])],

      FechaLimite: ['', Validators.required],


    });


    //user
    this.userId = 1;

  }

/*
  ngOnInit() {
  }*/

  ngAfterViewInit() {
  //  this.languages = this.languageChild.languages;
  //  this.skills = this.skillChild.skills;
  }

  submit(){
    let languages: LanguageJob[] = [];
     for (let i = 0; i < this.languageChild.languages.length; i++) {
      let language = new LanguageJob();
      language.Idioma = this.languageChild.languages[i];
      language.OfertaId = this.userId;
      languages.push(language);
    }

    let skills: Skill[] = [];
     for (let i = 0; i < this.skillChild.skills.length; i++) {
      let skill = new Skill();
      skill.Habilidad = this.skillChild.skills[i];
      skill.OfertaId = this.userId;
      skills.push(skill);
    }

    let ofertaTrabajo = new OfertaTrabajo();
    ofertaTrabajo = this.expForm.value;
    ofertaTrabajo.EmpresaId = this.userId;
    //ofertaTrabajo.Profesion = professions;
    ofertaTrabajo.IdiomasReq = languages;
    //ofertaTrabajo.Descripcion = titulos;
    ofertaTrabajo.HabilidadesReq = skills;
    console.log(ofertaTrabajo);
    this.ofertaServ.post(ofertaTrabajo).subscribe(res => {
      this.snackBar.open("registro completado correctamente", "", {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
    }, error => {
      this.snackBar.open("error", "", {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
      console.log(error);
    });
  }

}