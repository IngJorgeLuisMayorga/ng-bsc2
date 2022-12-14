import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsCategoryIdComponent } from './view-products-category-id.component';

describe('ViewProductsCategoryIdComponent', () => {
  let component: ViewProductsCategoryIdComponent;
  let fixture: ComponentFixture<ViewProductsCategoryIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsCategoryIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsCategoryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
