import { Component } from '@angular/core';
import { CartFacadeService } from 'src/app/modules/cart/services/cart-facade.service';
import { Observable } from 'rxjs';
import { ICartProduct } from 'src/app/modules/cart/models/cart.model';

@Component({
  selector: 'app-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.scss']
})
export class SidebarCartComponent {

  public isOpen$: Observable<boolean>;
  public products$: Observable<ICartProduct[]>;
  public progressBar$: Observable<Number>;
  public missingAmout$: Observable<Number>;

  constructor(private cartFacade:CartFacadeService){
    this.isOpen$ = this.cartFacade.syncIsOpen$();
    this.progressBar$ = this.cartFacade.getProgressBar$();
    this.missingAmout$ = this.cartFacade.getMissingToFreeShipping$();
    this.products$ = this.cartFacade.getProducts$();
  }


  doToogle(){
    this.cartFacade.toogleStatus();
  }


}
