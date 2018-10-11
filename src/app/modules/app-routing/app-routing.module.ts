import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { PerfilComponent } from '../../components/perfil/perfil.component';
import { BuscarEmpleadoComponent } from '../../components/buscar-empleado/buscar-empleado.component';
import { InicioComponent } from '../../components/inicio/inicio.component';


const routes: Routes = [
	{ path: '', component: InicioComponent},
	{ path: 'perfil', component: PerfilComponent},
	{ path: 'buscar', component: BuscarEmpleadoComponent},
	{ path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
