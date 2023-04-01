import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-otro',
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.css']
})
export class OtroComponent  implements OnInit  {
  empleado : Empleado = new Empleado();
  constructor(){

  };


  ngOnInit(): void {
    console.log(this.empleado);
    throw new Error('Method not implemented.');
  }
}
