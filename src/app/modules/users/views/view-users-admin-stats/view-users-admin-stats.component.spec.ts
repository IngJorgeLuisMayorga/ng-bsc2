import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersAdminStatsComponent } from './view-users-admin-stats.component';

describe('ViewUsersAdminStatsComponent', () => {
  let component: ViewUsersAdminStatsComponent;
  let fixture: ComponentFixture<ViewUsersAdminStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersAdminStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersAdminStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
