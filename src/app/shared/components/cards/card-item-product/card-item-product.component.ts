import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/modules/products/models/Product.model';

@Component({
  selector: 'app-card-item-product',
  templateUrl: './card-item-product.component.html',
  styleUrls: ['./card-item-product.component.scss']
})
export class CardItemProductComponent {

    @Input()
    id!: number;

    @Input()
    brand!: string;

    @Input()
    title!: string;

    @Input()
    price!: number;

    @Input()
    discount!: number;

    @Input()
    quantity!: number;

    @Input()
    image!: string;


    get discounted(): number{
      return this.price * (1 - 1/100 * this.discount)
    }

    quantityUp(){}
    quantityDown(){}
    quantityRemove(){}

}
