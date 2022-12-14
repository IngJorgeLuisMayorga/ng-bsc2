import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsIdComponent } from './view-products-id.component';

describe('ViewProductsIdComponent', () => {
  let component: ViewProductsIdComponent;
  let fixture: ComponentFixture<ViewProductsIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
