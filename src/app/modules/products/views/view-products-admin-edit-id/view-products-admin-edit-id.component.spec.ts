import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsAdminEditIdComponent } from './view-products-admin-edit-id.component';

describe('ViewProductsAdminEditIdComponent', () => {
  let component: ViewProductsAdminEditIdComponent;
  let fixture: ComponentFixture<ViewProductsAdminEditIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsAdminEditIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsAdminEditIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
