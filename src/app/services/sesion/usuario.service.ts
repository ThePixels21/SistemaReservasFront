import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.development';
import { UsuarioSesion } from 'src/app/model/sesion/usuarioSesion';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrlSesion: string =
    'http://eure.activos.com.co:10501/JADM0074B/api/rest/usuario/cliente/gestionUsuarios/buscarSesion';


  constructor(private http: HttpClient) {}

  public getSesion(usuario: string): Observable<UsuarioSesion> {
    const url: string = this.baseUrlSesion + `/${usuario}`;
    return this.http.get<UsuarioSesion>(url);
  }
}
