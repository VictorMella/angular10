import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  listUsuario: any[] = [];
  listPicture: any[] = [];
  copiaListUsuario: any[] = [];
  loading = true;

  constructor(private usuario: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario(): void {
    this.usuario.getusuarios().subscribe((data) => {
      this.getFotos(data.data);
    });
  }

  getFotos(datauser: any): void {
    this.usuario.getPicture().subscribe((foto) => {
      this.listPicture = foto.hits;
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.listPicture.length; index++) {
        const element = this.listPicture[index];
        datauser[index].foto = element.largeImageURL;
      }
      this.listUsuario = datauser;
      this.loading = false;
    });
  }
}
