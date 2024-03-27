import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaProductosI } from '../modelos/listaProductos.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  public getData(): Observable<ListaProductosI[]>{
    return this.http.get<ListaProductosI[]>(this.urlApi);
  }

}
