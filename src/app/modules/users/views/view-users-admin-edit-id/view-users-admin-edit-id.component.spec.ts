import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersAdminEditIdComponent } from './view-users-admin-edit-id.component';

describe('ViewUsersAdminEditIdComponent', () => {
  let component: ViewUsersAdminEditIdComponent;
  let fixture: ComponentFixture<ViewUsersAdminEditIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersAdminEditIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersAdminEditIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
