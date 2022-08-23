import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  categorias = [{id:1,nombre_categoria:"nombre",cantidad_producto:0}];
  constructor(private api:ApiService) { 
    this.getCategorias();
  }
  getCategorias(){
    this.api.getAllCategorias().subscribe(
      data =>{
        console.log(data);
        this.categorias = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  
  newCategoria(nombre: any, num: any){
    const newCate = {nombre_categoria: nombre.value,cantidad_producto: num.value};
    this.api.postCategorias(newCate).subscribe(
      data => {
        console.log(data);
        this.getCategorias();
      },
      error => {
        console.log(error);
      }
    )
  }
  
  ngOnInit(): void {
  }

}
