import { Component,  Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CompartirInfoSesionService } from 'src/app/services/sesion/compartir-info-sesion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck  {

  items: MenuItem[] | undefined;
  @Input() ussIdSesion = ''
  usuUsuario = ''

  constructor (private router: Router,
    private compartirInfoSesionService: CompartirInfoSesionService
    ){}


  ngDoCheck(): void {
    this.usuUsuario = this.compartirInfoSesionService.getUsuUsuario();
  }

 

  //ya tengo el usuario guardado en el localstorage en otro componente, pero cuando lo intento capturar aqui me lo imprime como null
  ngOnInit() {
    //  console.log('desde el header: '+ this.ussIdSesion)
    
  }

  navegarReservas(){
     this.router.navigate([`dashboard/inicio/reservas`]) 
  }

  navegarEspacios(){
    this.router.navigate([`dashboard/inicio/espacios`]) 
 }
}
