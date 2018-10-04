import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
