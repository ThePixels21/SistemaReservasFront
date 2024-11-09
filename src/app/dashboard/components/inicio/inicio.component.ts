import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioSesion } from 'src/app/model/sesion/usuarioSesion';

import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent  implements OnInit {

  ussIdSesion: string = '';

  usuarioSesion: UsuarioSesion = {
    usuUsuario : ''
  };

  constructor (private rutaActiva: ActivatedRoute
    ){
      
  }
  ngOnInit(): void {
      console.log('Inicio de aplicacion co working')
  }

  
   /*capturarUsuUsuario(){
    localStorage.setItem('usuarioSesion', this.ussIdSesion);
   }*/
    
    capturarUsuUsuario() {
     this.ussIdSesion = this.rutaActiva.snapshot.params['ussIdSesion']; // Captura el valor del parámetro directamente
     localStorage.setItem('usuarioSesion', this.ussIdSesion); // Guarda en el localStorage
 }



}
