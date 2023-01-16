import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { InputProductQuantityComponent } from './input-product-quantity.component';

describe('InputProductQuantityComponent', () => {
  let component: InputProductQuantityComponent;
  let fixture: ComponentFixture<InputProductQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ InputProductQuantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
