import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAcademicComponent } from './components/professional/form-academic/form-academic.component';
import { BuscarEmpleadoComponent } from './components/company/search-employee/search-employee.component';
import { SearchEmploymentComponent } from './components/professional/search-employment/search-employment.component';
import { JobOfferComponent } from './components/company/offer-job/offer-job.component';
import { CompanyRegistrationComponent } from './components/company/company-registration/company-registration.component';
import { EmployeeBasicRegistrationComponent } from './components/professional/employee-basic-registration/employee-basic-registration.component';
import { EmploymentInformationComponent } from './components/professional/search-employment/employment-information/employment-information.component';
import { EmployeeInformationComponent } from './components/company/search-employee/employee-information/employee-information.component';
import { HomeComponent } from './components/professional/home/home.component';
import { HomeCompanyComponent } from './components/company/home-company/home-company.component'
import { PostulantsComponent } from './components/company/postulants/postulants.component';
import { RestrictRoutesService } from './services/restrict-routes/restrict-routes.service';
import { LoginComponent } from './components/common/login/login.component';
import { RegisterComponent } from './components/common/register/register.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
   
  
  {
    path: "empresa", component: HomeCompanyComponent, canActivate: [RestrictRoutesService],
    data: { expectedRole: ['Company'] },
    children: [
      { path: 'RegistroEmpresa', component: CompanyRegistrationComponent },
      { path: 'OfertaTrabajo', component: JobOfferComponent },
      { path: "BuscarEmpleado", component: BuscarEmpleadoComponent },
      { path: 'Postulantes/:id', component: PostulantsComponent },
      { path: 'InformacionEmpleado/:id', component: EmployeeInformationComponent },

    ],
  },

  {
    path: "empleado", component: HomeComponent, canActivate: [RestrictRoutesService],
    data: { expectedRole: ['Employee'] }, 
    children: [
      { path: 'InformacionAcademica', component: FormAcademicComponent },
      { path: "SearchEmployment", component: SearchEmploymentComponent },
      { path: "InformacionBasica", component: EmployeeBasicRegistrationComponent },
       { path: 'InformacionTrabajo/:id', component: EmploymentInformationComponent },
       { path: 'InformacionEmpleado/:id', component: EmployeeInformationComponent },

    ]
  }
];
@NgModule({
  imports: [
  CommonModule,
     RouterModule.forRoot(routes)   
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
