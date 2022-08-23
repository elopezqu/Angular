import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './vistas/home/home.component';
import { CategoriaComponent } from './vistas/categoria/categoria.component';
import { ListProductosComponent } from './vistas/list-productos/list-productos.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { InformeVentaComponent } from './vistas/informe-venta/informe-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriaComponent,
    ListProductosComponent,
    ProductosComponent,
    InformeVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
