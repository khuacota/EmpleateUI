
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../../models/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {


  entrys: string[] = ['Alimenticio','Automovilistico','Social','Software','Limpieza','Hardware'];
  companyForm: FormGroup;

  constructor(private fb: FormBuilder, private service: EmpresaService, public snackBar: MatSnackBar) {
    this.companyForm = this.fb.group({
      Name: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]+')
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
        Validators.pattern('[a-zA-Z]+')
      ])],


      Email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")
      ])],

      Image: ['', Validators.compose([
        Validators.required
      ])],

      Url: ['', Validators.compose([
        Validators.pattern("(http://|https://)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?")
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
    console.log(company);
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
