import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAcademicComponent } from './components/professional/form-academic/form-academic.component';
import { OfertarTrabajoComponent} from './components/empresa/ofertar-trabajo/ofertar-trabajo.component';
import { RegistroEmpresaComponent } from './components/empresa/registro-empresa/registro-empresa.component';
import { RegistroEmpleadoBasicoComponent } from './components/registro-empleado-basico/registro-empleado-basico.component';
import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';
import { SearchEmploymentComponent } from './components/search-employment/search-employment.component';


const routes: Routes = [
  { path: 'InformacionAcademica', component: FormAcademicComponent },
  { path: 'OfertaTrabajo', component: OfertarTrabajoComponent },
  { path: 'RegistroEmpresa', component: RegistroEmpresaComponent },
  { path: 'InformacionBasica', component: RegistroEmpleadoBasicoComponent },
  { path: 'BuscarEmpleado', component: BuscarEmpleadoComponent },
  { path: 'SearchEmployment', component: SearchEmploymentComponent},
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
