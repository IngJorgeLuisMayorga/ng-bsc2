import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { ISideCartStatus } from '../models/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartUIService {

  private _status: BehaviorSubject<ISideCartStatus> = new BehaviorSubject<ISideCartStatus>(ISideCartStatus.CLOSE);
  public status$: Observable<ISideCartStatus> = this._status.asObservable();

  constructor() {}

  private setOpenCart(){
    this._status.next(ISideCartStatus.OPEN);
  }

  private setCloseCart(){
    this._status.next(ISideCartStatus.CLOSE);
  }

  private getStatus(){
      return this._status.getValue()
  }

  public sync$(){
      return this.status$;
  }

  public isOpen$(){
    return this.status$.pipe(map(status => status === ISideCartStatus.OPEN));
}

  public setToogle(){
    const openCart = this.getStatus();
    if(openCart === ISideCartStatus.OPEN) this.setCloseCart();
    else this.setOpenCart();
  }

  public setClose(){
    const openCart = this.getStatus();
    if(openCart === ISideCartStatus.OPEN){
        this.setCloseCart();
    } 
  }
}