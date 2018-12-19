import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputChipsComponent } from "../../inputs/input-chips/input-chips.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LanguageJob } from '../../../models/language';
import { Skill } from '../../../models/skill';
import { JobOffer } from '../../../models/jobOffer';
import { JobOfferService } from '../../../services/jobOffer/job-offer.service';
import { MatSnackBar } from '@angular/material';
import { Regex } from '../../../models/regex';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';


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

  constructor(private route: Router, private fb: FormBuilder, private ofertaServ: JobOfferService, public snackBar: MatSnackBar, public servAuth: AuthService) {

    this.expForm = this.fb.group({
      Profession: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.ALPHABETIC)
      ])],

      Description: ['', Validators.required],

      City: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.ALPHABETIC)
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

    this.servAuth.getCompany().subscribe(res => {

      this.userId = res[0].id;
      console.log(this.userId);
    });

  }
  

  ngAfterViewInit() {
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
    jobOffer.ReqLanguages = languages;
    jobOffer.ReqSkills = skills;
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
    });
  }

}
