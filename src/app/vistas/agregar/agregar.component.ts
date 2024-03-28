import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService } from '../../service/api.service';
import { ProductoI } from '../../modelos/producto.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.scss'
})
export class AgregarComponent {

  agregarForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private api:ApiService, private router:Router){}

  postForm(form: any){
    this.api.postProducto(form).subscribe( data => {
      console.log(data);
    });
  }

  salir(){
    this.router.navigate(['dashboard']);
  }

}
