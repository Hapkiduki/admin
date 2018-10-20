import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ProgressComponent } from './progress/progress.component';

import { Graficas1Component } from './graficas1/graficas1.component';

import { PagesComponent } from './pages.component';

import { LoginComponent } from '../login/login.component';

import { RegisterComponent } from '../login/register.component';

import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const pagesRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ],
    component: PagesComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
