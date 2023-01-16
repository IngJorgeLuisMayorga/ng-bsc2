import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgHoverComponent } from '@shared/components/img-hover/img-hover.component';
import { ImgLazyComponent } from '@shared/components/img-lazy/img-lazy.component';
import { InputQuantityComponent } from '@shared/components/inputs/input-quantity/input-quantity.component';
import { SharedModule } from '@shared/shared.module';
import { CartStoreService } from 'src/app/modules/cart/services/cart-store.service';
import { ProductsStoreService } from 'src/app/modules/products/services/products-store.service';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent, InputQuantityComponent, ImgHoverComponent,ImgLazyComponent ],
      imports:[ SharedModule, HttpClientTestingModule],
      providers:[ProductsStoreService, CartStoreService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
