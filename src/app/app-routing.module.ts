import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAcademicComponent } from './components/professional/form-academic/form-academic.component';
import { JobOfferComponent } from './components/company/offer-job/offer-job.component';
import { CompanyRegistrationComponent } from './components/company/company-registration/company-registration.component';
import { EmployeeBasicRegistrationComponent } from './components/employee-basic-registration/employee-basic-registration.component';
import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';
import { EmployeeInformationComponent } from './components/buscar-empleado/employee-information/employee-information.component';


const routes: Routes = [
  { path: 'InformacionAcademica', component: FormAcademicComponent },
  { path: 'OfertaTrabajo', component: JobOfferComponent },
  { path: 'RegistroEmpresa', component: CompanyRegistrationComponent },
  { path: 'InformacionBasica', component: EmployeeBasicRegistrationComponent },
  { path: 'BuscarEmpleado', component: BuscarEmpleadoComponent },
  { path: 'InformacionEmpleado', component: EmployeeInformationComponent }
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
