
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../../models/company';
import { CompanyService } from '../../../services/company/company.service';
import { MatSnackBar } from '@angular/material';
import { Regex } from '../../../models/regex';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {


  entrys: string[] = ['Alimenticio','Automovilistico','Social','Software','Limpieza','Hardware'];
  companyForm: FormGroup;

  constructor(private fb: FormBuilder, private servAuth: AuthService, private service: CompanyService, public snackBar: MatSnackBar) {
    this.companyForm = this.fb.group({
      Name: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.ALPHANUMERIC)
      ])],
      Phone: ['', Validators.compose([
        Validators.required, Validators.max(99999999), Validators.min(9999999)

      ])],
      Description: ['', Validators.compose([
        Validators.required

      ])],

      Entry: ['', Validators.compose([
        Validators.required
      ])],

      Address: ['', Validators.compose([
        Validators.required,
        Validators.pattern(Regex.ALPHABETIC)
      ])],


      Email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],

      Image: ['', Validators.compose([
        Validators.required
      ])],

      Url: ['', Validators.compose([
        Validators.pattern(Regex.URL)
      ])]
    });
  }

  ngOnInit() {
  }

  registrar() {
    var Name: string = this.companyForm.get('Name').value;
    var Description: string = this.companyForm.get('Description').value;
    var Entry: string = this.companyForm.get('Entry').value;
    var Address: string = this.companyForm.get('Address').value;
    var Phone: string = this.companyForm.get('Phone').value;
    var Email: string = this.companyForm.get('Email').value;
    var web: string = this.companyForm.get('Url').value;
    var Image: string = this.companyForm.get('Image').value;
    let company = new Company();
    company.Name = Name;
    company.Description = Description;
    company.Entry = Entry;
    company.Address = Address;
    company.Phone = parseInt(Phone);
    company.Email = Email;
    company.Image = Image;
    company.Url = web;
    if (this.servAuth.user) {
      company.IdUser = this.servAuth.user.userId;
    }
    else {
      company.IdUser = this.servAuth.getUser().userId;
    }
    this.service.postEmpresa(company).subscribe(res => {
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
