import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service'; // El servicio de autenticación
import { Router } from '@angular/router'; // Para redirigir después del registro

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Variables del formulario de registro
  displayRegisterDialog: boolean = true;
  registerData = {
    name: '',
    email: '',
    password: ''
  };
  errors: any = {};
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Método para manejar el registro
  onRegister(): void {
    // Validar los datos de registro antes de enviar
    if (!this.registerData.name || !this.registerData.email || !this.registerData.password) {
      this.errors = {
        name: !this.registerData.name ? 'El nombre es requerido' : '',
        email: !this.registerData.email ? 'El correo electrónico es requerido' : '',
        password: !this.registerData.password ? 'La contraseña es requerida' : ''
      };
      return;
    }

    this.loading = true;

    // Agregar el rol de "User" automáticamente antes de enviar los datos
    const userData = {
      ...this.registerData,
      role: 'User'  // Establecer el rol fijo como "User"
    };

    this.authService.register(userData).subscribe(
      (response) => {
        this.loading = false;
        alert('Registro exitoso');
        this.router.navigate(['/login']); // Redirigir al login después del registro
      },
      (error) => {
        this.loading = false;
        this.errors = error.error;
        alert('Error al registrarse');
      }
    );
  }

  // Método para limpiar el formulario y los errores
  clearForm(): void {
    this.registerData = { name: '', email: '', password: '' };
    this.errors = {};
  }

  navigateToLogin() {
    this.router.navigate(['/authprincipal/login']);
  }
}
