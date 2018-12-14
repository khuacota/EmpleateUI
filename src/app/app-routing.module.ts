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

const routes: Routes = [  
  
  { path: 'OfertaTrabajo', component: JobOfferComponent },
  { path: 'RegistroEmpresa', component: CompanyRegistrationComponent },  
  { path: 'InformacionTrabajo/:id', component: EmploymentInformationComponent },
  { path: 'BuscarEmpleado', component: BuscarEmpleadoComponent },
  { path: 'InformacionEmpleado/:id', component: EmployeeInformationComponent },
  { path: 'Professional/Home', component: HomeComponent,
      children: [
        {path:'InformacionAcademica', component: FormAcademicComponent},
        { path: 'SearchEmployment', component: SearchEmploymentComponent},
        { path: 'InformacionBasica', component: EmployeeBasicRegistrationComponent },
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
