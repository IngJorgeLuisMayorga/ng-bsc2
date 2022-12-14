import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ViewUsersIdOrdersIdComponent } from './view-users-id-orders-id.component';

describe('ViewUsersIdOrdersIdComponent', () => {
  let component: ViewUsersIdOrdersIdComponent;
  let fixture: ComponentFixture<ViewUsersIdOrdersIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsersIdOrdersIdComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
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
