import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css'],
})
export class CrearAlumnoComponent implements OnInit {
  nombre = '';
  estado = 'No aprobado';
  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {}

  agregarAlumno(): void {
    const alumno: Alumno = {
      nombre: this.nombre,
      estado:
        this.estado.charAt(0).toUpperCase() +
        this.estado.substr(1).toLowerCase(),
    };

    if (alumno.nombre != '' && alumno.estado != undefined) {
      this.alumnoService.addAlumno(alumno);
      // this.alumnoService.listAmunos.unshift(alumno)
      this.nombre = '';
      this.estado = 'No aprobado';
    }
  }
}
