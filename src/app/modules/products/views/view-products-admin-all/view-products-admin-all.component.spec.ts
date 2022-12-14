import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsAdminAllComponent } from './view-products-admin-all.component';

describe('ViewProductsAdminAllComponent', () => {
  let component: ViewProductsAdminAllComponent;
  let fixture: ComponentFixture<ViewProductsAdminAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsAdminAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsAdminAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
