import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {


  protected getAuthHeaders(): HttpHeaders {
    const ussIdSession = localStorage.getItem('usuarioSesion');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': `CulNBS9ZWNkrXqqGLICClkWSdgsuvI4J5CWlcv2tqcLL9NJaQEPOnfCObeLwFAu2pueU0SntUb8G6ijrdoMJ7dz3oJzhV4wEJIvKUOIROP5IycNUF9aEgGhgmdA0YMz2
`
    });
    return headers;
  }
}
