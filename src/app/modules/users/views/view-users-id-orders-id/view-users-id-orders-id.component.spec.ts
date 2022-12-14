import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersIdOrdersIdComponent } from './view-users-id-orders-id.component';

describe('ViewUsersIdOrdersIdComponent', () => {
  let component: ViewUsersIdOrdersIdComponent;
  let fixture: ComponentFixture<ViewUsersIdOrdersIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersIdOrdersIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersIdOrdersIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
