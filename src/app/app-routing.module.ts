import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { AgregarComponent } from './vistas/agregar/agregar.component';
import { EditarComponent } from './vistas/editar/editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'agregar', component: AgregarComponent},
  { path: 'editar/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
