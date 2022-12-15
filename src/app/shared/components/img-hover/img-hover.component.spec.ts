import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHoverComponent } from './img-hover.component';

describe('ImgHoverComponent', () => {
  let component: ImgHoverComponent;
  let fixture: ComponentFixture<ImgHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
