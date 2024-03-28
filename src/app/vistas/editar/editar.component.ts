import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductoI } from '../../modelos/producto.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})

export class EditarComponent /* implements OnInit */{

  /* datosProducto: ProductoI; */
  datosProducto:ProductoI = {id: '', title: '', description: '', price: '0', category: '', image: ''};

  editarForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit(){
    let productoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getSingleProducto(productoId).subscribe((data) => {
      this.editarForm.setValue({
        'id' : data.id,
        'title' : data.title,
        'price' : data.price,
        'description' : data.description,
        'image' : data.image,
        'category' : data.category,
      });
      console.log(data);
    });
  }

  postForm(form: any){
    this.api.putProducto(form).subscribe((data) => {
      console.log(data);
      alert('Producto editado exitosamente!');
      this.router.navigate(['dashboard']);
    });
  }

  eliminarProducto(){
    let datos: any = this.editarForm.value;
    this.api.deleteProducto(datos).subscribe((data) => {
      console.log(data);
      alert('El producto ha sido eliminado');
      this.router.navigate(['dashboard']);
    })
  }

  salir(){
    this.router.navigate(['dashboard']);
  }

}
