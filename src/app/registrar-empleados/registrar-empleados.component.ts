import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado/empleado.service';

@Component({
  selector: 'app-registrar-empleados',
  templateUrl: './registrar-empleados.component.html',
  styleUrls: ['./registrar-empleados.component.css'],
})
export class RegistrarEmpleadosComponent implements OnInit {
  empleado: Empleado = new Empleado();
  constructor(
    private empleadoServicio: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('estas en onInit');
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
      (dato) => {
        console.log(dato);
      this.irAlaListaDeEmpleados();
      },
      (error) => console.log(error)
    );
  }


  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onSubmit() {
    console.log("se esta ejecutando el onSubmit");
    console.log(this.empleado);

    this.guardarEmpleado();
  }
}
