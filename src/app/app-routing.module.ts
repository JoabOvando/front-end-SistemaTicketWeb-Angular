import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { InservueloComponent } from './inservuelo/inservuelo.component';
import { PersonaComponent } from './persona/persona.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { EquipajeComponent } from './equipaje/equipaje.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'vuelo', component: VueloComponent},
  { path: 'inservuelo', component: InservueloComponent},
  { path: 'persona', component: PersonaComponent},
  { path: 'reservacion', component: ReservacionComponent},
  { path: 'equipaje', component:EquipajeComponent},
  // otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
