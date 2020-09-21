import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css'],
})
export class InfoUsuarioComponent implements OnInit {
  id: number;
  infoUser: {} = {};
  listPicture: any[] = [];
  indexFoto: number;
  nombre: string;
  email: string;
  imgUrl = 'string';
  genero: string;
  loading = true;
  constructor(
    private aRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getusuario();
  }

  getusuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe((data) => {
      this.infoUser = data.data;
      this.getFotos(data.data);
    });
  }
  getFotos(datauser: any): void {
    this.usuarioService.getPicture().subscribe((foto) => {
      this.listPicture = foto.hits;
      this.indexFoto = Math.floor(Math.random() * 20);
      datauser.foto = this.listPicture[this.indexFoto].largeImageURL;

      this.nombre = datauser.name;
      this.email = datauser.email;
      this.imgUrl = datauser.foto;
      this.genero = datauser.gender;
      this.loading = false;
    });
  }
}
