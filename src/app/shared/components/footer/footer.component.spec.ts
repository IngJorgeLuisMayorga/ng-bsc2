import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IColor } from '@shared/config/footer.config';
import { SharedModule } from '@shared/shared.module';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hover class for pink, yellow and blue', () => {
    const colors:IColor[] = ['pink', 'yellow', 'blue'];
    const assertClasses = ['hover-color-pink','hover-color-yellow','hover-color-blue']
    const hoverClasses = colors.map((color:IColor) => component.getHoverClass(color))
    expect(hoverClasses).toEqual(assertClasses);
  });

});
