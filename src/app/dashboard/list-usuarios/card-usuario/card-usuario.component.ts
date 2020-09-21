import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css'],
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;

  nombre: string;
  email: string;
  imgUrl = 'string';

  id: number;
  constructor() {
  }

  ngOnInit(): void {
    this.nombre = this.user.name;
    this.email = this.user.email;
    this.imgUrl = this.user.foto;
    this.id = this.user.id;
  }
}
