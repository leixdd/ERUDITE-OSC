import { TestBed, inject } from '@angular/core/testing';

import { RcService } from './rc.service';

describe('RcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RcService]
    });
  });

  it('should be created', inject([RcService], (service: RcService) => {
    expect(service).toBeTruthy();
  }));
});
