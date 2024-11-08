import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: ''
  };
  errors: any = {};
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Método para manejar el login
  onLogin(): void {
    console.log("login");
    this.loading = true; // Establecer loading en true mientras se hace la solicitud
    this.authService.login(this.loginData).subscribe(
      (response) => {
        this.loading = false; // Detener loading cuando se recibe respuesta
        this.authService.storeToken(response.access_token); // Guardar el token
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/dashboard']); // Redirigir al dashboard
      },
      (error) => {
        this.loading = false; // Detener loading si ocurre un error
        this.errors = error.error; // Mostrar los errores en la interfaz
        alert('Error en el inicio de sesión');
      }
    );
  }

  // Método para redirigir a la página de registro
  navigateToRegister() {
    this.router.navigate(['/authprincipal/register']);
  }
}
