import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFavoriteAddComponent } from './button-favorite-add.component';

describe('ButtonFavoriteAddComponent', () => {
  let component: ButtonFavoriteAddComponent;
  let fixture: ComponentFixture<ButtonFavoriteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFavoriteAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFavoriteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
