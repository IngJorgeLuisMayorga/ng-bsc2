import { TestBed } from '@angular/core/testing';

import { ProductsRepositoryService } from './products-repository.service';

xdescribe('ProductsRepositoryService', () => {
  let service: ProductsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsRepositoryService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
