import { Component } from '@angular/core';
import { ProductsRepositoryService } from '../../services/products-repository.service';

@Component({
  selector: 'app-view-products-all',
  templateUrl: './view-products-all.component.html',
  styleUrls: ['./view-products-all.component.scss']
})
export class ViewProductsAllComponent {

  constructor(private $products: ProductsRepositoryService){

  }

}
