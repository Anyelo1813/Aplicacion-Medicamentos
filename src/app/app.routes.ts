import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'medicamentos',
    loadComponent: () => import('./medicamentos/medicamentos.page').then( m => m.MedicamentosPage)
  },


  {
    path: 'notas',
    loadComponent: () => import('./Notas/notas/notas.page').then( m => m.NotasPage)
  },









];
