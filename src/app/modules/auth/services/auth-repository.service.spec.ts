import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthRepositoryService } from './auth-repository.service';

describe('AuthRepositoryService', () => {
  let service: AuthRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterModule, HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(AuthRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
