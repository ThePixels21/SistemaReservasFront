import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { environment } from 'src/app/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private baseUrl: string = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) {
    super();
  }

  // Método para registrar usuarios
  register(userData: any): Observable<any> {
    const headers = this.getAuthHeaders(); // Obteniendo encabezados del BaseService
    return this.http.post(`${this.baseUrl}/`, userData, { headers });
  }

  // Método para iniciar sesión (Login)
  login(credentials: { username: string, password: string }): Observable<any> {
    const headers = this.getAuthHeaders();
    const body = {
      username: credentials.username,
      password: credentials.password,
      grant_type: null, // Según el esquema dado en FastAPI
      scope: '',
      client_id: null,
      client_secret: null
    };
    return this.http.post(`${this.baseUrl}/login`, body, { headers });
  }

  // Guardar el token JWT en el localStorage
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Obtener el token JWT desde localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
