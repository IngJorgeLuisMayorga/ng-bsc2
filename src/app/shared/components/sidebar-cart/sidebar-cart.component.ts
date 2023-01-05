import { Component, HostListener } from '@angular/core';
import { CartFacadeService } from 'src/app/modules/cart/services/cart-facade.service';
import { Observable } from 'rxjs';
import { ICartProduct } from 'src/app/modules/cart/models/cart.model';

const SIDECART_NODENAME = 'APP-SIDEBAR-CART';
const NAVBAR_BUTTON_NODENAME = 'APP-HEADER-NAVBAR';
const NAVBAR_BUTTON_ID = 'btn-name-Carrito';
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

  private isClickInside = false;

  @HostListener("click")
  clicked() {
    this.isClickInside = true;
  }
  @HostListener("document:click", ['$event'])
  clickedOut($event: any) {
    const targetNodeNames = $event.path.map((item:HTMLElement) => item.nodeName);
    const targetNodeIds = $event.path.map((item: HTMLElement) => item.id);
    const isTargetSideCart = (targetNodeNames.includes(SIDECART_NODENAME)) || (targetNodeIds.includes(NAVBAR_BUTTON_ID));
    if(!isTargetSideCart){
      console.log('Closing!')
      this.doClose();
    } else{
      console.log('No Closing');
    }
  }

  constructor(private cartFacade:CartFacadeService){
    this.isOpen$ = this.cartFacade.getIsOpen$();
    this.progressBar$ = this.cartFacade.getProgressBar$();
    this.missingAmout$ = this.cartFacade.getMissingToFreeShipping$();
    this.products$ = this.cartFacade.getProducts$();
  }


  doToogle(){
    this.cartFacade.setToogleIsOpen();
  }

  doClose(){
    this.cartFacade.setCloseIsOpen();
  }

}
