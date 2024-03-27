import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})

export class EditarComponent implements OnInit{

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void{
    let productoId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(productoId);
  }

}
