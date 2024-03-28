import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './vistas/agregar/agregar.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo:'dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'agregar', component: AgregarComponent},
  { path: 'editar/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
