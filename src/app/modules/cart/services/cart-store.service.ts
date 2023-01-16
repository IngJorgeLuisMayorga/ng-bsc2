import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../products/models/Product.model';
import {
  DefaultCart,
  ICart,
  ICartProduct,
  ICartShippingStatus,
  ISideCartStatus,
  toCartProduct,
} from '../models/cart.model';
import { Observable, map } from 'rxjs';
import { CartStorageService } from './cart-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  private _cart = new BehaviorSubject<ICart>(DefaultCart);
  private cart$ = this._cart.asObservable();

  constructor(private cartStorage: CartStorageService) {}

  private setCart(cart: ICart): void {
    this.cartStorage.save(cart);
    this._cart.next(cart);
  }

  private getCart(): ICart {
    return this._cart.getValue();
  }

  // Public Methods
  public init() {
    const cart = this.cartStorage.load();
    if (cart) this.setCart(cart);
  }

  public sync$(): Observable<ICart> {
    return this.cart$;
  }

  public increaseProduct(product: IProduct) {
    const cartStore = this.getCart();
    const cartProduct = cartStore.products.find((item) => item.id === product.id);
    if (!cartProduct) {
      cartStore.products.push(toCartProduct(product));
      this.setCart(cartStore);
    } else {
      cartProduct.quantity = cartProduct.quantity + 1;
      cartStore.products = [...cartStore.products.filter(product => product.id !== cartProduct.id), cartProduct];
      this.setCart(cartStore);
    }
  }

  public decreaseProduct(product: IProduct) {
    const cartStore = this.getCart();
    const cartProduct = cartStore.products.find(
      (item) => item.id === product.id
    );
    if (cartProduct) {
      cartProduct.quantity = Math.max(0, cartProduct.quantity - 1);
      cartStore.products = [...cartStore.products, cartProduct];
      this.setCart(cartStore);
    }
  }

  public removeProduct(product: IProduct) {
    const cartStore = this.getCart();
    const cartProducts = cartStore.products.filter(
      (item) => item.id !== product.id
    );
    cartStore.products = cartProducts;
    this.setCart(cartStore);
  }
}
