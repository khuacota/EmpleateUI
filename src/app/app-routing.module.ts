import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAcademicComponent } from './components/professional/form-academic/form-academic.component';
import { BuscarEmpleadoComponent } from './components/search-employee/search-employee.component';
import { SearchEmploymentComponent } from './components/search-employment/search-employment.component';
import { JobOfferComponent } from './components/company/offer-job/offer-job.component';
import { CompanyRegistrationComponent } from './components/company/company-registration/company-registration.component';
import { EmployeeBasicRegistrationComponent } from './components/employee-basic-registration/employee-basic-registration.component';
import { EmploymentInformationComponent } from './components/search-employment/employment-information/employment-information.component';
import { EmployeeInformationComponent } from './components/search-employee/employee-information/employee-information.component';
import { RestrictRoutesService } from './services/restrict-routes/restrict-routes.service';
import { LoginComponent } from './components/common/login/login.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'InformacionTrabajo/:id', component: EmploymentInformationComponent },
  { path: 'InformacionEmpleado/:id', component: EmployeeInformationComponent },

  // Paths for Company Users
  {
    path: "empresa", component: CompanyRegistrationComponent, canActivate: [RestrictRoutesService],
    data: { expectedRole: ['Company'] }
  },
  {
    path: "empresa", canActivate: [RestrictRoutesService],
    data: { expectedRole: ['Company'] },
    children: [
      { path: 'RegistroEmpresa', component: CompanyRegistrationComponent },
      { path: 'OfertaTrabajo', component: JobOfferComponent },
      { path: "BuscarEmpleado", component: BuscarEmpleadoComponent },
    ],
  },

  // Paths for Admin Users
  {
    path: "empleado", component: EmployeeBasicRegistrationComponent, canActivate: [RestrictRoutesService],
    data: { expectedRole: ['Employee'] }
  },
  {
    path: "empleado", canActivate: [RestrictRoutesService],
    data: { expectedRole: ['Employee'] },
    children: [
      { path: 'InformacionAcademica', component: FormAcademicComponent },
      { path: "SearchEmployment", component: SearchEmploymentComponent },
      { path: "InformacionBasica", component: EmployeeBasicRegistrationComponent }
    ]
  },
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
