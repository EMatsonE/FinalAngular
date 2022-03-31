import { TestBed } from '@angular/core/testing';

import { BorrowedAPIService } from './borrowed-api.service';

describe('BorrowedAPIService', () => {
  let service: BorrowedAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowedAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
