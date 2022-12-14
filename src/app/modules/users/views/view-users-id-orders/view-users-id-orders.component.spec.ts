import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersIdOrdersComponent } from './view-users-id-orders.component';

describe('ViewUsersIdOrdersComponent', () => {
  let component: ViewUsersIdOrdersComponent;
  let fixture: ComponentFixture<ViewUsersIdOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersIdOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersIdOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
