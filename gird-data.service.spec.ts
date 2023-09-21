import { TestBed } from '@angular/core/testing';

import { GirdDataService } from './gird-data.service';

describe('GirdDataService', () => {
  let service: GirdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GirdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
