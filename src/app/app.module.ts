import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta línea

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InservueloComponent } from './inservuelo/inservuelo.component';
import { PersonaComponent } from './persona/persona.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { EquipajeComponent } from './equipaje/equipaje.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    VueloComponent,
    DialogComponent,
    InservueloComponent,
    PersonaComponent,
    ReservacionComponent,
    EquipajeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule, // Asegúrate de agregar FormsModule aquí
    HttpClientModule, BrowserAnimationsModule,
    MatDialogModule


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
