import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthprincipalRoutingModule } from './authprincipal-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'; 
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthprincipalRoutingModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ProgressBarModule,
    DropdownModule,
    CalendarModule,
    PasswordModule,
    FormsModule,
    ToastModule
  ], providers: [
    MessageService
  ]
})
export class AuthprincipalModule { }
