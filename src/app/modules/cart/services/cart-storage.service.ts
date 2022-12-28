import { Injectable } from '@angular/core';
import { ICart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {

  constructor() { }

  save(cart: ICart){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  load(): ICart | null{
    const cartJson = localStorage.getItem('cart');
    if(cartJson) return JSON.parse(cartJson);
    return null;
  }
}
