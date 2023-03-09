import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //api a consumir de empleado
  private baseUrl = "http://localhost:4000/api/empleado";
  constructor(private httpCliente : HttpClient) { }


  //obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpCliente.get<Empleado[]>(`${this.baseUrl}`);
  }

}
