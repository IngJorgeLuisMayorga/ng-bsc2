import { Component } from '@angular/core';
import { map, Observable, of } from 'rxjs';
const BASE = '../../../../assets/icons/header-navbar';

export interface IHeaderNotification{
    name: string; count: number
}

export enum NotificationsNames {
  CART = 'Carrito',
  PROFILE = 'Perfil',
  SEARCH = 'Buscar'

}

export const DefaultNotification: IHeaderNotification = {
  name: '',
  count: 0
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
      name: NotificationsNames.SEARCH,
      icons: {
        alt: 'Icono de lupa, click para buscar productos en nuestra tienda',
        normal: `${BASE}/header-icon-lupa.png`,
        hover: `${BASE}/header-icon-lupa--hover.jpg`,
      },
      method: () => this.goToSearch(),
    },
    {
      name: NotificationsNames.PROFILE,
      icons: {
        alt: 'Icono de personas, click para ir a tu perfil o iniciar sesiòn si no estas registrado en nuestra tienda',
        normal: `${BASE}/header-icon-persona.png`,
        hover: `${BASE}/header-icon-persona--hover.jpg`,
      },
      method: () => this.goToProfile(),
    },
    {
      name: NotificationsNames.CART,
      icons: {
        alt: 'Icono de carrito, click para ver los productos añadidos a carrito',
        normal: `${BASE}/header-icon-cart.png`,
        hover: `${BASE}/header-icon-cart--hover.jpg`,
      },
      method: () => this.goToCart(),
    },
  ];

  public $notifications: Observable<IHeaderNotification[]>;
  public $notificationsCart: Observable<IHeaderNotification>;
  public $notificationsProfile: Observable<IHeaderNotification>;
  public $notificationsSearch: Observable<IHeaderNotification>;

  constructor(){
    this.$notifications = of([{
      name: NotificationsNames.CART,
      count: 10
    }]);
    this.$notificationsCart = this.getNotificationObsByName(NotificationsNames.CART);
    this.$notificationsProfile = this.getNotificationObsByName(NotificationsNames.PROFILE);
    this.$notificationsSearch = this.getNotificationObsByName(NotificationsNames.SEARCH);
  }

  getNotificationObsByName(obsName: string): Observable<IHeaderNotification>{
    return this.$notifications.pipe(
      map(notifications => notifications.find(
          item => String(item.name) === String(obsName)
        ) || DefaultNotification
      )
    );
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
