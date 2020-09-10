import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  listAmunos: Alumno[] = [
    { nombre: 'Juan Perez', estado: 'Aprobado' },
    { nombre: 'Peter Veneno', estado: 'No aprobado' },
    { nombre: 'Lucho Barrios', estado: 'Promocionado' },
    { nombre: 'Freddy Turbina', estado: 'Aprobado' },
  ];
  constructor() {}

  addAlumno(alumno: Alumno): void {
    this.listAmunos.unshift(alumno);
  }

  updateAlumno(id: number, estado: string): void {
    this.listAmunos[id].estado = estado;
  }
}
