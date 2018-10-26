import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';

import { ReactiveFormsModule } from '@angular/forms';


import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';
import { PerfilComponent } from  './components/perfil/perfil.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';


import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
         MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
         MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
         MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';        

import { ProfesionService } from './services/profesiones/profesion.service.ts.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { BaseService } from './services/base.service';

import { HttpClientModule } from '@angular/common/http';
import { ModificaPerfilComponent } from './components/modifica-perfil/modifica-perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    BuscarEmpleadoComponent,
    PerfilComponent,
    InicioComponent,
    ModificaPerfilComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProfesionService],
  bootstrap: [AppComponent]
})

export class AppModule { }