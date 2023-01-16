import { Injectable, Input } from '@angular/core';
import { IProduct } from '../models/Product.model';

interface IStorageService<T> {
  save(collection: T): void;
  load(): Promise<T>;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsStorageService implements IStorageService<IProduct[]> {

  constructor() { }

  public save(products: IProduct[]){
    if(!products){
      localStorage.setItem('products', '[]');
    }
    localStorage.setItem('cart', JSON.stringify(products));
  }

  public load(): Promise<IProduct[]>{
    return new Promise((resolve, reject) => {
      const productsJson = localStorage.getItem('products');
      if(!productsJson) {
        resolve([]);
      }
      const parsed : IProduct[] = JSON.parse(productsJson || '[]');
      resolve(parsed);
    })
   
  }
}
