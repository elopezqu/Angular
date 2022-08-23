import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {
  codigo;
  productos = [{id: 4, nombre: "Oreo",precio_unidad: "0.60",precio_paquete: "3.50",cantidad_por_paquete: 6,cantidad_de_paquete: 20,cantidad_vendida: 1,cantidad_total: 119,fecha_carga: "2022-08-21",fecha_vencimiento: "2022-08-21T00:37:44-05:00",Codigo: "oreo1",nombre_categoria: "Golosinas",Proveedor: "costa",categoria: 13}];
  constructor(private api:ApiService, private rutaActiva: ActivatedRoute) { 
    this.codigo = Number(this.rutaActiva.snapshot.paramMap.get("categoria"));
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
  newProductos(nom: any,preUni:any,prePa:any,canPorPa:any,canDePa:any,canVen :any,fecha:any,cod:any,prov:any ){
    const newPro = {nombre: nom.value,precio_unidad: preUni.value,precio_paquete: prePa.value,cantidad_por_paquete: canPorPa.value,cantidad_de_paquete: canDePa.value,cantidad_vendida: canVen.value,categoria: this.codigo,fecha_vencimiento: fecha.value,Codigo: cod.value,Proveedor: prov.value };
    this.api.postProductos(newPro).subscribe(
      data => {
        console.log(data);
        this.getProductos();
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    
  }

}
