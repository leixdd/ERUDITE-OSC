import { TestBed, inject } from '@angular/core/testing';

import { PrjmService } from './prjm.service';

describe('PrjmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrjmService]
    });
  });

  it('should be created', inject([PrjmService], (service: PrjmService) => {
    expect(service).toBeTruthy();
  }));
});
