import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';

@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    ReservasComponent,
    EspaciosComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
