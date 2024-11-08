import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';  // Importar el AuthGuard
import { AdminGuard } from './guards/admin.guard';  // Importar el AdminGuard (opcional)

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]  // Protege la ruta del Dashboard con AuthGuard
  },
  /*{
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, AdminGuard]  // Protege rutas para administradores
  },*/
  {
    path: 'authprincipal',
    loadChildren: () => import('./authprincipal/authprincipal.module').then(m => m.AuthprincipalModule)
  },
  {
    path: '**', redirectTo: 'authprincipal/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
