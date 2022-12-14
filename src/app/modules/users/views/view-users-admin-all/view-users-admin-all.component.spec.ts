import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersAdminAllComponent } from './view-users-admin-all.component';

describe('ViewUsersAdminAllComponent', () => {
  let component: ViewUsersAdminAllComponent;
  let fixture: ComponentFixture<ViewUsersAdminAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersAdminAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersAdminAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
