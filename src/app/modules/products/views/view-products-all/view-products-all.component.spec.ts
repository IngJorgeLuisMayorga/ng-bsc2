import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsAllComponent } from './view-products-all.component';

describe('ViewProductsAllComponent', () => {
  let component: ViewProductsAllComponent;
  let fixture: ComponentFixture<ViewProductsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
