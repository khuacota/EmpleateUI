import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';

import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfesionService } from './services/profesiones/profesion.service';
import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ProfesionService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
