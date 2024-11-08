import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioSesion } from 'src/app/model/sesion/usuarioSesion';

import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/sesion/usuario.service';
import { CompartirInfoSesionService } from 'src/app/services/sesion/compartir-info-sesion.service';

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

  constructor (private rutaActiva: ActivatedRoute, private usuarioService: UsuarioService,
    private compartirInfoSesionService: CompartirInfoSesionService
    ){
      
  }
  ngOnInit(): void {

    //Descomentar cuando se vaya a desplegar en el github
    
    this.rutaActiva.params.pipe(
      switchMap(params => {
        this.ussIdSesion = params['ussIdSesion'];
        this.capturarUsuUsuario();
        return this.usuarioService.getSesion(this.ussIdSesion);
        //return "";
      })
    ).subscribe((response) => {
      this.usuarioSesion = response;
      this.compartirInfoSesionService.setUsuUsuario(this.usuarioSesion.usuUsuario);
      console.log(this.usuarioSesion);
      localStorage.setItem('usuUsuario', this.usuarioSesion.usuUsuario)
      
    });
    
  //  this.capturarUsuUsuario();
    
  }

  
   /*capturarUsuUsuario(){
    localStorage.setItem('usuarioSesion', this.ussIdSesion);
   }*/
    
    capturarUsuUsuario() {
     this.ussIdSesion = this.rutaActiva.snapshot.params['ussIdSesion']; // Captura el valor del parámetro directamente
     localStorage.setItem('usuarioSesion', this.ussIdSesion); // Guarda en el localStorage
 }



}
