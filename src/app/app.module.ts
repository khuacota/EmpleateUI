import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { ProfesionService } from './services/profesiones/profesion.service.ts.service';
import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [ProfesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
