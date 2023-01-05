import { Injectable } from '@angular/core';
import { ICart, ICartProduct, ISideCartStatus } from '../models/cart.model';
import { CartStoreService } from './cart-store.service';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { CartUIService } from './cart-ui.service';


@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {

  private cart$:Observable<ICart>;
  private open$:Observable<boolean>;

  constructor(private $cartStore: CartStoreService, private $cartUI: CartUIService) {
    this.cart$ = this.$cartStore.sync$();
    this.open$ = this.$cartUI.isOpen$();
  }

  // Store
  getProgressBar$(): Observable<Number>{
    return this.cart$.pipe(map(cart => cart.overview.shipping_missing_to_free_percentage));
  }
  getMissingToFreeShipping$(): Observable<Number>{
    return this.cart$.pipe(map(cart => cart.overview.shipping_missing_to_free_amount));
  }
  getCount$(): Observable<number>{
    return this.cart$.pipe(map(cart =>
      cart.products.map(item => item.quantity).reduce((prev, curr) => prev + curr)
    ));
  }
  getProducts$(): Observable<ICartProduct[]>{
    return this.cart$.pipe(map(cart => cart.products));
  }
  getTotal$(): Observable<ICartProduct[]>{
    return this.cart$.pipe(map(cart => cart.products));
  }
  getSubTotal$(): Observable<ICartProduct[]>{
    return this.cart$.pipe(map(cart => cart.products));
  }
  getTaxes$(): Observable<ICartProduct[]>{
    return this.cart$.pipe(map(cart => cart.products));
  }


  // UI Settings 
  setToogleIsOpen() {
    this.$cartUI.setToogle();
  }
  getIsOpen$(): Observable<boolean>{
    return this.open$;
  }
  setCloseIsOpen(){
    this.$cartUI.setClose();
  }

}
