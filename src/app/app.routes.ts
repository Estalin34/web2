import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { Error404Component } from './pages/error404/error404.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { ProductoDetalleComponent } from './pages/Productodetalle/producto-detalle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'producto/:id', component:ProductoDetalleComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }