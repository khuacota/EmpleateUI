import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputChipsComponent } from "../../inputs/input-chips/input-chips.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LanguageJob } from '../../../models/language';
import { Skill } from '../../../models/skill';
import { JobOffer } from '../../../models/jobOffer';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-offer-job',
  templateUrl: './offer-job.component.html',
  styleUrls: ['./offer-job.component.css']
})


export class JobOfferComponent implements AfterViewInit {

  @ViewChild(InputChipsComponent) languageChild;

  @ViewChild(InputSkillsComponent) skillChild;

  private userId: number;

  expForm: FormGroup;
  today =  new Date();
  minDate = new Date(this.today.setDate(this.today.getDate() + 1));
  private languages: string[] = ['español', 'ingles'];
  private alllanguages: string[] = ['español', 'ingles', 'frances', 'ruso'];

  constructor(private fb: FormBuilder,private ofertaServ: JobOfferService, public snackBar: MatSnackBar) {

    this.expForm = this.fb.group({
      Profession: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')
      ])],

      Description: ['', Validators.required],

      City: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')
      ])],

      StartTime: ['', Validators.required],
      EndTime: ['', Validators.required], 
      
      MinExperience:['5',Validators.compose([
        Validators.min(0),
        Validators.max(20),
        Validators.required,
        ])],

      Deadline: ['', Validators.required],


    });


    //user
    this.userId = 1;

  }

/*
  ngOnInit() {
  }*/

  ngAfterViewInit() {
  //  this.items = this.languageChild.items;
  //  this.skills = this.skillChild.skills;
  }

  submit(){
    let languages: LanguageJob[] = [];
     for (let i = 0; i < this.languageChild.items.length; i++) {
      let language = new LanguageJob();
      language.Language = this.languageChild.items[i];
      language.OfferId = this.userId;
      languages.push(language);
    }

    let skills: Skill[] = [];
     for (let i = 0; i < this.skillChild.skills.length; i++) {
      let skill = new Skill();
      skill.Skill = this.skillChild.skills[i];
      skill.OfferId = this.userId;
      skills.push(skill);
    }

    let jobOffer = new JobOffer();
    jobOffer = this.expForm.value;
    jobOffer.CompanyId = this.userId;
    //JobOffer.Profession = professions;
    jobOffer.ReqLanguages = languages;
    //JobOffer.Description = titulos;
    jobOffer.ReqSkills = skills;
    console.log(jobOffer);
    this.ofertaServ.post(jobOffer).subscribe(res => {
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