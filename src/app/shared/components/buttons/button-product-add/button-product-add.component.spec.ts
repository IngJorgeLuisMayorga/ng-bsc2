import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonProductAddComponent } from './button-product-add.component';

describe('ButtonProductAddComponent', () => {
  let component: ButtonProductAddComponent;
  let fixture: ComponentFixture<ButtonProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonProductAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text "Lo Quiero" ', () => {
    const compiled = fixture.debugElement.nativeElement;
    const selector = 'h1';
    const button = compiled.querySelector(selector);
    expect(button.textContent).toContain('Lo quiero');
  });

  it('should have hover animation and changing icon ', () => {
  });

  // Product Exist in Cart

  // Product Not Exist in Cart

  // Add Product to Cart

  // Remove Product to Cart

  // Hover Animation when Product in Cart

  // Hover Animation when Not Product in Cart



});
