import { Component } from '@angular/core';

enum whenStateEnum {
  CART = 'cart',
  NO_CART = 'no-cart',
}

@Component({
  selector: 'app-button-product-add',
  templateUrl: './button-product-add.component.html',
  styleUrls: ['./button-product-add.component.scss']
})
export class ButtonProductAddComponent {

  public whenState : whenStateEnum = whenStateEnum.NO_CART;

  public whenNoCart = {
    text:'¡Lo quiero!',
    icon: 'bag'
  };

  public whenCart = {
    text:'¡Agregado!',
    bag: 'smile'
  };

  public isWhenCart(){
    return this.whenState === whenStateEnum.CART;
  }

}
