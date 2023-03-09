import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{

empleados:Empleado[];

  constructor(){}
  
  ngOnInit(): void {
    this.empleados = [{
      "id":1,
      "nombre":"francisco",
      "apellido":"Ramirez",
      "email":"francisco.graya26@gmail.com",
    },{
      "id":2,
      "nombre":"jocelyn",
      "apellido":"pontones",
      "email":"graya26@gmail.com",
    }
    ]
  }

}
