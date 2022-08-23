import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './vistas/categoria/categoria.component';
import { HomeComponent } from './vistas/home/home.component';
import { ListProductosComponent } from './vistas/list-productos/list-productos.component';
import { ProductosComponent } from './vistas/productos/productos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriaComponent},
  {path: 'lista_productos/:categoria', component: ListProductosComponent},
  {path: 'producto/:producto', component: ProductosComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
