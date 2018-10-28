import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'menu-icon mdi mdi-television',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'Progress',
          url: '/progress'
        },
        {
          titulo: 'Graficas',
          url: '/graficas1'
        },
        {
          titulo: 'Promesas',
          url: '/promesas'
        }
      ]
    }
  ];
  constructor() {}
}
