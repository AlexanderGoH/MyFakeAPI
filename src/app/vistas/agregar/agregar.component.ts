import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  nuevoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required),
  });

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  postForm(form: any) {
    if (this.nuevoForm.valid) {
      const newProduct: any = {
        title: form.title,
        price: form.price,
        description: form.description,
        categoryId: form.categoryId,
        images: [form.images],
      };


      console.log(newProduct);
      this.api.postProducto(newProduct).subscribe(
        (data: any) => {
          this.router.navigate(['dashboard']);
          console.log('Producto creado exitosamente:', data);
        },
        (error: any) => {
          console.error('Error al crear el producto:', error);
          console.log(newProduct)
        }
      );
    } else {
      console.error('El formulario es inválido. Por favor, complete todos los campos.');
      
    }
  }
  salir() {
    this.router.navigate(['dashboard']);
  }
}
