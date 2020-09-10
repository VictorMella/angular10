import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css'],
})
export class ListAlumnosComponent implements OnInit {
  listAlumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void {
    this.listAlumnos = this.alumnoService.listAmunos;
  }

  updateAlumno(id: number, estado: string) {
    this.alumnoService.updateAlumno(id, estado);
  }
}
