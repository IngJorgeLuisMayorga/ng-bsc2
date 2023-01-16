import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/Product.model';
import { ProductsRepositoryService } from './products-repository.service';

export interface IProductStore {
  [key: string]: IProduct[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreService {
  private _productStore: BehaviorSubject<IProductStore> =
    new BehaviorSubject<IProductStore>({});
  public publicStore$ = this._productStore.asObservable();

  constructor(private productsRepository: ProductsRepositoryService) {}

  initHome(): void {
    // Fecth Duo
    // Fetch Random Recommended
    // Fetch Cart
  }

  initProductById(productId: number): void {}

  setHome(products: IProduct[]) {
    const store = this._productStore.getValue();
    store['home'] = products;
    this._productStore.next(store);
  }


  async fetchById(id: number){
    const product = await this.productsRepository.getById(id);
    const store = this._productStore.getValue();
    if(!store['home']) store['home'] = [];
    store['home'].push(product);
    this._productStore.next(store);
    return product;
  }

  findById(id: number){
    const store: IProduct[][] = Object.values(this._productStore.getValue());
    const products: IProduct[] =  store.flat();
    const product = products.find(item => item.id === id);
    return product;
  }

  
}
