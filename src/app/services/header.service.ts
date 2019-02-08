import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menu: any = [
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-gauge',
      url: '/dashboard'
    },
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-',
      url: '/graficas'
    }
  ];

  constructor() { }
}
