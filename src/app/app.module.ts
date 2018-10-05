import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';

import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
         MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
         MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
         MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';

import { ProfesionService } from './services/profesiones/profesion.service.ts.service';


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
