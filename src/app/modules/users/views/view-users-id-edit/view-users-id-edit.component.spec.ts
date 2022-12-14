import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersIdEditComponent } from './view-users-id-edit.component';

describe('ViewUsersIdEditComponent', () => {
  let component: ViewUsersIdEditComponent;
  let fixture: ComponentFixture<ViewUsersIdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersIdEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersIdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
