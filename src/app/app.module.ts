import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfesionService } from './services/profesiones/profesion.service.ts.service';
//import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroEmpleadoBasicoComponent } from './components/registro-empleado-basico/registro-empleado-basico.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarEmpleadoComponent,
    NavbarComponent,
    RegistroEmpleadoBasicoComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  
  providers: [ProfesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
