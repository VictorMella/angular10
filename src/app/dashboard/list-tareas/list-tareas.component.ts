import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css'],
})
export class ListTareasComponent implements OnInit {
  
  tarea = '';
  titulo = 'Agregar';
  lstareas: any[] = [];
  indexTarea = null;

  constructor() {}

  ngOnInit(): void {}

  agregarTarea() {
    const tarea = {
      nombre: this.tarea,
      finalizada: false,
    };
    if (this.titulo == 'Agregar') {
      this.lstareas.push(tarea);
    } else {
      this.lstareas[this.indexTarea].nombre = this.tarea;
      this.lstareas[this.indexTarea].finalizada = !this.lstareas[this.indexTarea].finalizada
      this.titulo = 'Agregar';
    }

    this.tarea = '';
  }

  // tslint:disable-next-line: typedef
  eliminarTarea(index) {
    this.lstareas.splice(index, 1);
  }

  editarTarea(tarea, index) {
    this.titulo = 'Actualizar';
    this.lstareas[index].finalizada = !tarea.finalizada
    this.tarea = this.lstareas[index].nombre;
    this.indexTarea = index;
  }
}
