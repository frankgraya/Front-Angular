import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Empleado } from '../empleado';
/* service es una clase que se utiliza para proporcionar datos o funcionalidades a
 través de la aplicación. Los services son una forma de compartir datos 
 y funcionalidades entre varios componentes */

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //api a consumir de empleado
  private baseUrl = "http://localhost:4000/api/empleado";
  constructor(private httpCliente : HttpClient) { }


  //obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    console.log('Obteniendo todos los empleados');
    return this.httpCliente.get<Empleado[]>(`${this.baseUrl}`).pipe(
      catchError(error => {
        console.log('Error al obtener la lista de empleados:', error);
        return throwError('No se pudo obtener la lista de empleados');
      })
    );
  }


    //Registrar un empleado
  registrarEmpleado(empleado:Empleado) :Observable<object>{
    console.log('Agregando nuevo empleado:', empleado);
    return this.httpCliente.post(`${this.baseUrl}`, empleado);  
    }

}
