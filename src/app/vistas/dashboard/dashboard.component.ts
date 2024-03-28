import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

import { ListaProductosI } from '../../modelos/listaProductos.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  productos: ListaProductosI[] = [];

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.productos = data;
    })
  }

  editarProducto(id:string){
    this.router.navigate(['editar', id]);
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }
}
