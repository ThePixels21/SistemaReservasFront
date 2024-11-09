import { Component,  Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  items: MenuItem[] | undefined;
  @Input() ussIdSesion = ''
  usuUsuario = ''

  constructor (private router: Router
    ){}


  ngOnInit() {
    console.log('desde el header')
    
  }

  navegarReservas(){
     this.router.navigate([`dashboard/inicio/reservas`]) 
  }

  navegarEspacios(){
    this.router.navigate([`dashboard/inicio/espacios`]) 
 }
}
