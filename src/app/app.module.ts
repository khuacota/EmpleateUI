import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormAcademicComponent } from './components/professional/form-academic/form-academic.component';
import { InputChipsComponent } from './components/inputs/input-chips/input-chips.component';
import { AcademicTitleComponent } from './components/professional/form-academic/academic-title/academic-title.component';
import { FormExpComponent } from './components/professional/form-academic/form-exp/form-exp.component';
import { JobOfferComponent } from './components/company/offer-job/offer-job.component';
import { InputSkillsComponent } from './components/skills/input-skills/input-skills.component';
import { CompanyRegistrationComponent } from './components/company/company-registration/company-registration.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { AcademicService } from './services/academic/academic.service';
import { HttpErrorHandlerService } from './services/http-error-handler.service';
import { JobOfferService } from './services/jobOffer/job-offer.service';
import { CompanyService } from './services/company/company.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchEmploymentComponent } from './components/professional/search-employment/search-employment.component';
import { EmployeeBasicRegistrationComponent } from './components/professional/employee-basic-registration/employee-basic-registration.component';
import { BasicInformationService } from './services/employee/basic-information.service';
import { EmploymentInformationComponent } from './components/professional/search-employment/employment-information/employment-information.component';
import { EmployeeInformationComponent } from './components/company/search-employee/employee-information/employee-information.component';
import { BuscarEmpleadoComponent } from './components/company/search-employee/search-employee.component';
import { HomeComponent } from './components/professional/home/home.component';

@NgModule({
  declarations: [
    BuscarEmpleadoComponent,
    AppComponent,
    FormAcademicComponent,
    InputChipsComponent,
    AcademicTitleComponent,
    FormExpComponent,
    JobOfferComponent,
    InputSkillsComponent,
    CompanyRegistrationComponent,
    NavbarComponent,
    SearchEmploymentComponent,
    EmployeeBasicRegistrationComponent,
    EmploymentInformationComponent,
    EmployeeInformationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule

  ],

  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, AcademicService, HttpErrorHandlerService, JobOfferService, CompanyService, BasicInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

