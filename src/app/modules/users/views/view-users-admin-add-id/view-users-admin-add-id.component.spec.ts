import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersAdminAddIdComponent } from './view-users-admin-add-id.component';

describe('ViewUsersAdminAddIdComponent', () => {
  let component: ViewUsersAdminAddIdComponent;
  let fixture: ComponentFixture<ViewUsersAdminAddIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersAdminAddIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersAdminAddIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
