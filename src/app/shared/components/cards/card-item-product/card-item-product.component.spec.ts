import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputProductQuantityComponent } from '@shared/components/inputs/input-product-quantity/input-product-quantity.component';
import { InputQuantityComponent } from '@shared/components/inputs/input-quantity/input-quantity.component';
import { SharedModule } from '@shared/shared.module';

import { CardItemProductComponent } from './card-item-product.component';

describe('CardItemProductComponent', () => {
  let component: CardItemProductComponent;
  let fixture: ComponentFixture<CardItemProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ CardItemProductComponent , InputProductQuantityComponent, InputQuantityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
