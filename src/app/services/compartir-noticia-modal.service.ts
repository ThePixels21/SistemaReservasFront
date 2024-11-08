import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompartirNoticiaModalService {
  // Controla el estado del modal que gestiona toda la información de una noticia
  private estadoDialog = new BehaviorSubject<boolean>(false);
  estado$ = this.estadoDialog.asObservable();
  
  // controla el estado del modal que realiza el registro de una noticia
  private estadoDialogNoticia = new BehaviorSubject<boolean>(false);
  estadoDialogNoticia$ = this.estadoDialogNoticia.asObservable();

  constructor(){}

  actualizarEstado(nuevoEstado: boolean) {
    this.estadoDialog.next(nuevoEstado);
  }
  actualizarEstadoNoticiaRegistro(nuevoEstado: boolean){
    this.estadoDialogNoticia.next(nuevoEstado);
  }
}
