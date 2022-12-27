import { TestBed } from '@angular/core/testing';

import { BrandsRepositoryService } from './brands-repository.service';

describe('BrandsRepositoryService', () => {
  let service: BrandsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
