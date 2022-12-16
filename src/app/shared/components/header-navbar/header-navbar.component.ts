import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
const BASE = '../../../../assets/icons/header-navbar';

export interface IHeaderNotification{
    name: string; count: number
}

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
})
export class HeaderNavbarComponent {

  public waves = `${BASE}/header-waves.png`;
  public bsc = `${BASE}/header-bsc.png`;

  public menus = [
    {
      title: 'RUTINA',
      items: [
        {
          label: 'Option1',
          link: '/option/1',
        },
      ],
    },
  ];

  public buttons = [
    {
      name: 'Buscar',
      icons: {
        alt: 'Icono de lupa, click para buscar productos en nuestra tienda',
        normal: `${BASE}/header-icon-lupa.png`,
        hover: `${BASE}/header-icon-lupa--hover.jpg`,
      },
      method: () => this.goToSearch(),
    },
    {
      name: 'Profile',
      icons: {
        alt: 'Icono de personas, click para ir a tu perfil o iniciar sesiòn si no estas registrado en nuestra tienda',
        normal: `${BASE}/header-icon-persona.png`,
        hover: `${BASE}/header-icon-persona--hover.jpg`,
      },
      method: () => this.goToProfile(),
    },
    {
      name: 'Carrito',
      icons: {
        alt: 'Icono de carrito, click para ver los productos añadidos a carrito',
        normal: `${BASE}/header-icon-cart.png`,
        hover: `${BASE}/header-icon-cart--hover.jpg`,
      },
      method: () => this.goToCart(),
    },
  ];

  public $notifications: Observable<IHeaderNotification[]>;

  constructor(){
    this.$notifications = of([{
      name: 'Carrito',
      count: 10
    }])
  }

  goToSearch() {
    console.log('search');
  }
  goToProfile() {
    console.log('profile');
  }
  goToCart() {
    console.log('cart');
  }

  getBadge(button: any, notifications: IHeaderNotification[] | null): number {
    if(!notifications) return 0;
    return notifications.find( item => item.name === button.name )?.count || 0;
  }
}
