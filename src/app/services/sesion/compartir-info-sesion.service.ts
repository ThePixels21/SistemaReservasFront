import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirInfoSesionService {

  //Servicio que nos servirar para mantener vivo el usuario en sesion activo
  
  private usuUsuario: string = ''

  setUsuUsuario(usuUsuario: string){
    this.usuUsuario = usuUsuario;
  }

  getUsuUsuario(){
    return this.usuUsuario;
  }

}
