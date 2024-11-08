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

  onLogin(): void {
    this.loading = true;
    this.authService.login(this.loginData).subscribe(
      (response) => {
        this.loading = false;
        this.authService.storeToken(response.access_token); // Guardar token
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/dashboard']); // Redirigir después de iniciar sesión
      },
      (error) => {
        this.loading = false;
        this.errors = error.error;
        alert('Error en el inicio de sesión');
      }
    );
  }
}
