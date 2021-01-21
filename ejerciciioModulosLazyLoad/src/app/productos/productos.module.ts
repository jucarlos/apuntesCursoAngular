import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';


@NgModule({
  declarations: [AgregarComponent, ListadoComponent, ProductoDetalleComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
