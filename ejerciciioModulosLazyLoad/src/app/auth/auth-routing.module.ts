import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AutGuard } from '../guard/aut.guard';


const routes: Routes = [
  {
    path: '',   // la ruta principal, viene del padre
    children: [
      { path: 'forgot', component: ForgotComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'perfil', component: PerfilComponent },
      // para que por defecto vaya a este sitio
      { path: '**', redirectTo: 'login'}
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AuthRoutingModule { }
