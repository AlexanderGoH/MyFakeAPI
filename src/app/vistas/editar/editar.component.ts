import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaisI } from '../../modelos/pais.interface';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})

export class EditarComponent implements OnInit{

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private api:ApiService){}

  datosPais:PaisI;
  editarForm = new FormGroup({
    name = new FormControl('');
  });

  ngOnInit(): void{
    let paisId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getSinglePais(paisId).subscribe( data => {
      console.log(data);
    })
  }

}
