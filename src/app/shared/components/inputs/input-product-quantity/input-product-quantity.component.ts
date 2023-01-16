import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICart } from 'src/app/modules/cart/models/cart.model';
import { CartFacadeService } from 'src/app/modules/cart/services/cart-facade.service';
import { CartStoreService } from 'src/app/modules/cart/services/cart-store.service';

@Component({
  selector: 'app-input-product-quantity',
  templateUrl: './input-product-quantity.component.html',
  styleUrls: ['./input-product-quantity.component.scss']
})
export class InputProductQuantityComponent {

  @Input()
  id!: number;


  constructor(private cart$: CartStoreService) {

  }

  quantityUp() {
  
  }

  quantityDown() {}

  quantityRemove() {}
  
}
