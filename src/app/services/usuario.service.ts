import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = 'dcee0ab3eff634eceb1937b3f70353d44a2581c458e4611be7f1bd927026ac4a';
  urlPicture = 'https://pixabay.com/api/?key=18346001-dc298658f9e2835658cdee626&q=people&image_type=photo'
  constructor(private http: HttpClient) {}

  getusuarios(): Observable<any> {
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getPicture(): Observable<any> {
    return this.http.get<any>(this.urlPicture)
  }

  getUsuario(id: number):Observable<any>{
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
  }
}
