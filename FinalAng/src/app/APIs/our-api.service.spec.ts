import { TestBed } from '@angular/core/testing';

import { OurAPIService } from './our-api.service';

describe('OurAPIService', () => {
  let service: OurAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
