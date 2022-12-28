import { Injectable } from '@angular/core';
import { ICart, ICartProduct, ISideCartStatus } from '../models/cart.model';
import { CartStoreService } from './cart-store.service';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {

  private cart$:Observable<ICart>;

  constructor(private $cartStore: CartStoreService) {
    this.cart$ = this.$cartStore.sync$();
  }

  //Getters

  syncIsOpen$(): Observable<boolean>{
    return this.cart$.pipe(map(cart => cart.status === ISideCartStatus.OPEN));
  }

  getProgressBar$(): Observable<Number>{
    return this.cart$.pipe(map(cart => cart.overview.shipping_missing_to_free_percentage));
  }

  getMissingToFreeShipping$(): Observable<Number>{
    return this.cart$.pipe(map(cart => cart.overview.shipping_missing_to_free_amount));
  }

  getProductsCount$(): Observable<number>{
    return this.cart$.pipe(map(cart =>
      cart.products.map(item => item.quantity).reduce((prev, curr) => prev + curr)
    ));
  }

  getProducts$(): Observable<ICartProduct[]>{
    return this.cart$.pipe(map(cart => cart.products));
  }


  //Setters
  toogleStatus() {
    this.$cartStore.toogleStatus();
  }

}
