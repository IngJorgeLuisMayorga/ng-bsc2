import { TestBed } from '@angular/core/testing';

import { CartUIService } from './cart-ui.service';

describe('CartUiService', () => {
  let service: CartUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
