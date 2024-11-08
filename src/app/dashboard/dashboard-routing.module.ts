import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';

const routes: Routes = [

  {path: '', redirectTo: '/dashboard/inicio/espacios', pathMatch: 'full'},
  
  {path: 'inicio', component: InicioComponent,
   children: [
    {path: '', redirectTo: 'espacios', pathMatch: 'full'},
    {path: 'espacios', component: EspaciosComponent},
    {path: 'reservas', component: ReservasComponent},

   ] 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

// NoticiaModule