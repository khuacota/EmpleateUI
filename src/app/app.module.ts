
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfesionService } from './services/profesiones/profesion.service.ts.service';
import { AppRoutingModule } from './app-routing.module';
import { FormAcademicComponent } from './components/professional/form-academic/form-academic.component';
import { InputLanguagesComponent } from './components/languages/input-languages/input-languages.component';
import { AcademicTitleComponent } from './components/professional/form-academic/academic-title/academic-title.component';
import { FormExpComponent } from './components/professional/form-academic/form-exp/form-exp.component';
import { AcademicService } from './services/academic/academic.service';
import { HttpErrorHandlerService } from './services/http-error-handler.service';
//import { BaseService } from './services/base.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroEmpleadoBasicoComponent } from './components/registro-empleado-basico/registro-empleado-basico.component';


@NgModule({
  declarations: [
    AppComponent,
    FormAcademicComponent,
    InputLanguagesComponent,
    AcademicTitleComponent,
    FormExpComponent,
    BuscarEmpleadoComponent,
    NavbarComponent,
    RegistroEmpleadoBasicoComponent,
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
  providers: [ProfesionService, AcademicService, HttpErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
