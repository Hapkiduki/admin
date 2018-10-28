import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ProgressComponent } from './progress/progress.component';

import { Graficas1Component } from './graficas1/graficas1.component';

import { PagesComponent } from './pages.component';

import { LoginComponent } from '../login/login.component';

import { RegisterComponent } from '../login/register.component';

import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { PromesasComponent } from './promesas/promesas.component';

const pagesRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
      { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficas'} },
      { path: 'promesas', component: PromesasComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ],
    component: PagesComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
