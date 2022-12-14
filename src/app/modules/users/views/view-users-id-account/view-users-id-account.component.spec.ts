import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersIdAccountComponent } from './view-users-id-account.component';

describe('ViewUsersIdAccountComponent', () => {
  let component: ViewUsersIdAccountComponent;
  let fixture: ComponentFixture<ViewUsersIdAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersIdAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersIdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
