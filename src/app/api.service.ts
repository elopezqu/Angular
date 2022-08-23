import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl="http://127.0.0.1:8000/productos/";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  getAllCategorias():Observable<any>{
    return this.http.get(this.baseurl+'categorias',{headers: this.httpHeaders});
  }
  postCategorias(cate: any):Observable<any>{
    return this.http.post(this.baseurl+"categorias",cate);
  }
  getAllProductos():Observable<any>{
    return this.http.get(this.baseurl+"productos",{headers: this.httpHeaders})
  }
  postProductos(pro: any):Observable<any>{
    return this.http.post(this.baseurl+"productos", pro);
  }
}
