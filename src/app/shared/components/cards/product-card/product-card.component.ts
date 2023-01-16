import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartStoreService } from 'src/app/modules/cart/services/cart-store.service';
import { ProductsStoreService } from 'src/app/modules/products/services/products-store.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  $quantity: Observable<number>;
 
  constructor(private products:ProductsStoreService, private cart: CartStoreService){
    this.$quantity = this.cart.sync$().pipe(map(cart => cart.products.find(product => product.id === this.id)?.quantity || 0));
  }

  @Input()
  id: number = -1;

  @Input()
  brand: string = '';

  @Input()
  title: string = '';

  @Input()
  price: number = 0;

  @Input()
  discount: number = 0;

  @Input()
  image: string = '';


  get discounted(): number {
    return this.price * (1 - (1 / 100) * this.discount);
  }

  get thumb(): string {
    return '../../../../../assets/products/1/1_thumb.jpeg';
  }

  quantityUp() {
    const product = this.products.findById(this.id);
    if(product) this.cart.increaseProduct(product);
  }

  quantityDown() {
    const product = this.products.findById(this.id);
    if(product) this.cart.decreaseProduct(product);
  }

  quantityRemove() {
    const product = this.products.findById(this.id);
    if(product) this.cart.removeProduct(product);
  }


}
