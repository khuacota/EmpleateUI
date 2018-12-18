import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { InputChipsComponent } from "../../inputs/input-chips/input-chips.component";
import { AcademicTitleComponent } from "./academic-title/academic-title.component";
import { FormExpComponent } from "./form-exp/form-exp.component";
import { Experience } from '../../../models/experience';
import { Degree } from '../../../models/Degree';
import { Language } from '../../../models/language';
import { Academic } from '../../../models/academic';
import { AcademicService } from '../../../services/academic/academic.service';
import { MatSnackBar } from '@angular/material';
import { OccupationEmp } from '../../../models/occupationEmp';
import { SkillEmp } from '../../../models/skillEmp';
import { AuthService } from '../../../services/auth/auth.service';
import { Employee } from '../../../models/employee';


@Component({
  selector: 'app-form-academic',
  templateUrl: './form-academic.component.html',
  styleUrls: ['./form-academic.component.css']
})
export class FormAcademicComponent implements AfterViewInit {
  @ViewChildren(InputChipsComponent) inputChips;
  @ViewChildren(AcademicTitleComponent) viewTitles: QueryList<AcademicTitleComponent>;
  @ViewChildren(FormExpComponent) viewExps: QueryList<FormExpComponent>;
  private myTitles: Array<any>;
  private myExperiences: Array<any>;
  private userId: number;
  private languages: string[] = ['español', 'ingles'];
  private alllanguages: string[] = ['español', 'ingles', 'frances', 'ruso'];
  private skills: string[] = ['liderazgo'];
  private allskills: string[] = ['liderazgo', 'java', 'angular', 'linux'];

  constructor(private academicServ: AcademicService, public snackBar: MatSnackBar, private servAuth: AuthService) {
    this.myTitles = [];
    this.myExperiences = [];
    this.userId = 1;
  }

  ngAfterViewInit() {
    this.servAuth.getEmploye().subscribe((res: any) => {
      this.userId = res[0].id;
    });
  }

  
  addTitle() {
    let obj = { degree: "", description: "" };
    this.myTitles.push(obj);
  }

  addExperience() {
    let obj = { degree: "", description: "" };
    this.myExperiences.push(obj);
  }

  disabled() {
    if (this.viewTitles) {

      let titles = this.viewTitles.toArray();
      let exps = this.viewExps.toArray();
      let inputsChips = this.inputChips.toArray();
      let res: boolean;
      for (let i = 0; i < inputsChips.length; i++) {
        if (inputsChips[i].label == 'idiomas') {
          res = res || inputsChips[i].items.length < 1;
        }
        if (inputsChips[i].label == 'Ocupaciones') {
          res = res || (inputsChips[i].items.length < 1 && titles.length < 1);
        }
      }
      return res || titles.some(e => e.academicForm.invalid) || exps.some(e => e.expForm.invalid);
    }
    return true;
  }

  /**get all the information of the childs components and put it all in a Academic object for send it 
   * */
  submit() {
    let titles = this.viewTitles.toArray();
    let exps = this.viewExps.toArray();
    let experiences: Experience[] = [];
    let degrees: Degree[] = [];
    let languages: Language[] = [];
    let skills: SkillEmp[] = [];
    let occupations: OccupationEmp[] = [];
    for (let i = 0; i < exps.length; i++) {
      let exp = exps[i].expForm.value;
      exp.EmployeeId = this.userId;
      experiences.push(exp);
    }
    for (let i = 0; i < titles.length; i++) {
      let title = titles[i].academicForm.value;
      title.EmployeeId = this.userId;
      degrees.push(title);
    }
    let inputsChips = this.inputChips.toArray();
    for (let i = 0; i < inputsChips.length; i++) {
      if (inputsChips[i].label == 'idiomas') {
        for (let j = 0; j < inputsChips[i].items.length; j++) {
          let language = new Language();
          language.Language = inputsChips[i].items[j];
          language.EmployeeId = this.userId;
          languages.push(language);
        }
      }
      if (inputsChips[i].label == 'habilidades') {
        for (let j = 0; j < inputsChips[i].items.length; j++) {
          let habilidad = new SkillEmp();
          habilidad.Skill = inputsChips[i].items[j];
          habilidad.EmployeeId = this.userId;
          skills.push(habilidad);
        }
      }
      if (inputsChips[i].label == 'Ocupaciones') {
        for (let j = 0; j < inputsChips[i].items.length; j++) {
          let ocupacion = new OccupationEmp();
          ocupacion.Occupation = inputsChips[i].items[j];
          ocupacion.EmployeeId = this.userId;
          occupations.push(ocupacion);
        }
      }
    }
    let academic = new Academic();
    academic.EmployeeId = this.userId;
    academic.Experiences = experiences;
    academic.Languages = languages;
    academic.Degrees = degrees;
    academic.Occupations = occupations;
    academic.Skills = skills;
    this.academicServ.postAcademicInfo(academic).subscribe(res => {
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
