import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  prod;
  productos = [{id: 4, nombre: "Oreo",precio_unidad: "0.60",precio_paquete: "3.50",cantidad_por_paquete: 6,cantidad_de_paquete: 20,cantidad_vendida: 1,cantidad_total: 119,fecha_carga: "2022-08-21",fecha_vencimiento: "2022-08-21T00:37:44-05:00",Código: "oreo1",nombre_categoria: "Golosinas",Proveedor: "costa",categoria: 13}];
  constructor(private api:ApiService, private rutaActiva: ActivatedRoute) { 
    this.prod = this.rutaActiva.snapshot.paramMap.get("producto");
    this.getProductos();
  }
  getProductos(){
    this.api.getAllProductos().subscribe(
      data =>{
        console.log(data);
        this.productos = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
  }

}
