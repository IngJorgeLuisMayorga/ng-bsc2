import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersIdFavsComponent } from './view-users-id-favs.component';

describe('ViewUsersIdFavsComponent', () => {
  let component: ViewUsersIdFavsComponent;
  let fixture: ComponentFixture<ViewUsersIdFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersIdFavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersIdFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
