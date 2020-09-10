import { Component, OnInit } from '@angular/core';
import {Empleado} from '../models/empleado'

@Component({
  selector: 'app-ls-empleados',
  templateUrl: './ls-empleados.component.html',
  styleUrls: ['./ls-empleados.component.css']
})
export class LsEmpleadosComponent implements OnInit {
generoEmpleados = 'Todos'

  listaEmpleados: Empleado[] = [
    {
      legajo: 1, nombre: 'Juan', apellido: 'Perez', genero: 'Masculino', sueldo: 150000
    },
    {
      legajo: 2, nombre: 'Pedro', apellido: 'Zapatero', genero: 'Masculino', sueldo: 750000
    },
    {
      legajo: 3, nombre: 'Clara', apellido: 'Roza', genero: 'Femenino', sueldo: 150000
    },
    {
      legajo: 4, nombre: 'Carolina', apellido: 'Muñoz', genero: 'Femenino', sueldo: 150000
    },
    {
      legajo: 5, nombre: 'Victor', apellido: 'Mella', genero: 'Masculino', sueldo: 30000
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getEmpleados():number{
    return this.listaEmpleados.length;
  }

  getEmpleadoMasculino():number {
    return this.listaEmpleados.filter(item => item.genero =='Masculino').length
  }

  getEmpleadoFemenino():number {
    return this.listaEmpleados.filter(item => item.genero =='Femenino').length
  }

  getSeleccion(event: string){
    this.generoEmpleados = event
  }

}
