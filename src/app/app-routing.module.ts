import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { OtroComponent } from './otro/otro.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { RegistrarEmpleadosComponent } from './registrar-empleados/registrar-empleados.component';

//Declaracion de componentes con Componente basado en ts con el onInit emplementado

const routes: Routes = [
  {path : 'empleados', component:ListaEmpleadosComponent},
  {path : '', redirectTo:'empleados', pathMatch:'full'},
  {path : 'registrar-empleado', component : RegistrarEmpleadosComponent},
  {path : 'otro', component : OtroComponent},
  {path : 'prueba2', component : Prueba2Component},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//{path : 'registrar-empleados', component : RegistrarEmpleadosComponent},
