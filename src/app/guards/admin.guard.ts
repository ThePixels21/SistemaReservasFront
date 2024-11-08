import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();  // Obtener el token JWT almacenado

    if (token) {
      const decodedToken = this.decodeToken(token);  // Decodificar el token para verificar el rol
      if (decodedToken.role === 'Admin') {
        return true;  // Si el usuario es un administrador, permitir el acceso
      }
    }

    this.router.navigate(['/authprincipal/login']);  // Si no es administrador, redirigir al login
    return false;
  }

  // Método para decodificar el token JWT
  private decodeToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));  // Decodifica la parte "payload" del JWT
  }
}
