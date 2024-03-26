import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PaisI } from '../modelos/pais.interface';
import { ListaPaisesI } from '../modelos/listaPaises.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://myfakeapi.com/api/football/teams/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<ListaPaisesI[]>{
    return this.http.get<ListaPaisesI[]>(this.urlApi);
  }

  getSinglePais(id:any): Observable<PaisI>{
    let direccion = this.urlApi + id;
    return this.http.get<PaisI>(direccion);
  }
}
