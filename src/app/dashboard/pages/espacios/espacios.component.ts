import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EspacioService } from 'src/app/services/espacios/espacio.service';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss'],
  providers: [ConfirmationService]
})
export class EspaciosComponent implements OnInit {
  

  espacios: any[] = [];

  constructor(private espacioService: EspacioService,
    private messageService: MessageService
  ) { }
  
  
  ngOnInit(): void {
    
    this.listEspacios();
  }



  listEspacios() { 

    this.espacioService.getEspacios().subscribe(
      (data) => {
        this.espacios = data;
        console.log(data)
      },
      (error) => {
        console.error('Error fetching workspaces:', error);
      }
    );



  }


reservarEspacio(espacio: any): void {
    if (!espacio.schedules || espacio.schedules.length === 0) {
      this.messageService.add({severity: 'warn', summary: 'info', detail:'Este espacio no cuenta con un horario disponible'})
    } else {
      
      this.messageService.add({severity: 'success', summary: 'info', detail:'Espacio reservado correctamente.'})
    }
  }

}
