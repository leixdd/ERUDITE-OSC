import { TestBed, inject } from '@angular/core/testing';

import { UsmService } from './usm.service';

describe('UsmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsmService]
    });
  });

  it('should be created', inject([UsmService], (service: UsmService) => {
    expect(service).toBeTruthy();
  }));
});
