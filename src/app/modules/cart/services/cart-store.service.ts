import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../products/models/Product.model';
import { DefaultCart, ICart, ICartProduct, ICartShippingStatus, ISideCartStatus } from '../models/cart.model';
import { Observable, map } from 'rxjs';
import { CartStorageService } from './cart-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  private _cart = new BehaviorSubject<ICart>(DefaultCart);
  private cart$ = this._cart.asObservable();

  constructor(private cartStorage: CartStorageService) {}

  private setCart(cart: ICart): void{
    this.cartStorage.save(cart);
    this._cart.next(cart);
  }

  private getCart(): ICart{
    return this._cart.getValue();
  }




  // Public Methods
  public init(){
    const cart = this.cartStorage.load();
    if(cart) this.setCart(cart);
  }

  public sync$(): Observable<ICart>{
    return this.cart$;
  }



}
