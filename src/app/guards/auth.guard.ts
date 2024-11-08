import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';  

@Injectable({
  providedIn: 'root'  
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  // Este método será ejecutado cuando se intente acceder a una ruta protegida
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;  // Si el usuario está autenticado, permitir el acceso
    } else {
      this.router.navigate(['/authprincipal/login']);  // Si no, redirigir al login
      return false;
    }
  }
}
