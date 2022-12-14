import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsAdminAddIdComponent } from './view-products-admin-add-id.component';

describe('ViewProductsAdminAddIdComponent', () => {
  let component: ViewProductsAdminAddIdComponent;
  let fixture: ComponentFixture<ViewProductsAdminAddIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsAdminAddIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsAdminAddIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
