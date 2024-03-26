import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

import { ListaPaisesI } from '../../modelos/listaPaises.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  data: any = {};
/*   paises:ListaPaisesI[]; */

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }

  editarTeam(id:number){
    this.router.navigate(['editar', id])
  }

  nuevoTeam(){
    this.router.navigate(['agregar']);
  }
}
