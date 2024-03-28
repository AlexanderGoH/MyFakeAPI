import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListaProductosI } from '../modelos/listaProductos.interface';
import { ProductoI } from '../modelos/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<ListaProductosI[]>{
    return this.http.get<ListaProductosI[]>(this.urlApi+'products');
  }

  getSingleProducto(id:any): Observable<ProductoI>{
    return this.http.get<ProductoI>(this.urlApi+'products/'+id);
  }

  putProducto(form:ProductoI): Observable<Response>{
    return this.http.put<Response>(this.urlApi+'products/'+form.id, form);
  }

  deleteProducto(form:ProductoI): Observable<Response>{
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: form,
    };
    return this.http.delete<Response>(this.urlApi+'products/'+form.id, options);
  }

  postProducto(form: ProductoI): Observable<Response>{
    return this.http.post<Response>(this.urlApi+"products", form);
  }

}
