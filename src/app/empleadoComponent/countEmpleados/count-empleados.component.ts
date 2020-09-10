import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
seleccionado = 'Todos'
@Input() todos: number
@Input() masculino: number
@Input() femenino: number
@Output() select: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  seleccionTipoEmpleado(){
    this.select.emit(this.seleccionado) 
  }

}
