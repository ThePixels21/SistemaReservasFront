import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/model/users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: User = {
    email: '',
    password: ''
  };
  errors: any = {};
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  // Método para manejar el login
  onLogin(): void {
    console.log("Iniciando sesión...");
    this.loading = true;
    
    console.log(this.user)
    // Enviar los datos de login al AuthService
    this.authService.login(this.user).subscribe(
      (response) => {
        this.loading = false; // Detener el loading cuando la solicitud es exitosa
        this.authService.storeToken(response.access_token); // Guardar el token en el localStorage
              this.messageService.add({severity: 'success', summary: 'info', detail:'Inicio de Sesion exitoso'})
        this.router.navigate(['/dashboard']); // Redirigir al dashboard después del login
      },
      (error) => {
        console.log(error)
        this.loading = false; // Detener el loading si ocurre un error
        this.errors = error.error; // Capturar el error de la respuesta
              this.messageService.add({severity: 'error', summary: 'info', detail:'Error al iniciar sesion'})
      }
    );
  }

  // Método para redirigir a la página de registro
  navigateToRegister() {
    this.router.navigate(['/authprincipal/register']);
  }
}
