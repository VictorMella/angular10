import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo ='Listado de estudiantes'
  
  lsEstudiantes: any = ([] = [
    {
      nombre: 'Victor Mella',
      estado: 'No aprobado',
    },
    {
      nombre: 'Carolina Muñoz',
      estado: 'Aprobado',
    },
    {
      nombre: 'Stefan Henriquez',
      estado: 'No aprobado',
    },
    {
      nombre: 'Agustin Mella',
      estado: 'Aprobado',
    },
    {
      nombre: 'Alondo Mella',
      estado: 'Promocionado',
    },
    {
      nombre: 'Agustin Mella',
      estado: 'Aprobado',
    },
  ]);
  btnToogle(){
 
  };
}
