import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAcademicComponent } from './components/professional/form-academic/form-academic.component';
import { OfertarTrabajoComponent} from './components/empresa/ofertar-trabajo/ofertar-trabajo.component';


const routes: Routes = [
  { path: 'RAcademic', component: FormAcademicComponent },
  { path: 'OfertarTrabajo', component: OfertarTrabajoComponent },
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
