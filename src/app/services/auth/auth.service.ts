import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { environment } from 'src/app/environments/enviroment';
import { User } from 'src/app/model/users/user';

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
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.baseUrl}/`, userData, { headers });
  }

  // Método para iniciar sesión (Login)
  login(user: User): Observable<any> {
    const headers = this.getAuthHeaders();
    
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(user), { headers });
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
    return !!this.getToken();  // Retorna true si existe el token
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
