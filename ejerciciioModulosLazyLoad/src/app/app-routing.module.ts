import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutGuard } from './guard/aut.guard';


const routes: Routes = [
  {
    path: 'auth', // Es el nombre que queremos para la ruta.
    canLoad: [AutGuard],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'productos', // Es el nombre que queremos para la ruta.
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
