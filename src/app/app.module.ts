import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Services
import { CancionesService } from './providers/canciones.service';

import { AppComponent } from './app.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { HttpClientModule } from '@angular/common/http';
import { CancionesFormComponent } from './components/canciones/canciones-form/canciones-form.component';



@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    CancionesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
