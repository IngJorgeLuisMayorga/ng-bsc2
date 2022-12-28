import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemProductComponent } from './card-item-product.component';

describe('CardItemProductComponent', () => {
  let component: CardItemProductComponent;
  let fixture: ComponentFixture<CardItemProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemProductComponent ]
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
