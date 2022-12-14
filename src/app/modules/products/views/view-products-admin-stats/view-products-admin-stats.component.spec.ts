import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsAdminStatsComponent } from './view-products-admin-stats.component';

describe('ViewProductsAdminStatsComponent', () => {
  let component: ViewProductsAdminStatsComponent;
  let fixture: ComponentFixture<ViewProductsAdminStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsAdminStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsAdminStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
