import { Component } from '@angular/core';
import { CartStoreService } from './modules/cart/services/cart-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngBSC';
  constructor(private cartStore: CartStoreService){
    this.cartStore.init();
  }
}
