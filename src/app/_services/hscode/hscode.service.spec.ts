import { TestBed, inject } from '@angular/core/testing';

import { HscodeService } from './hscode.service';

describe('HscodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HscodeService]
    });
  });

  it('should be created', inject([HscodeService], (service: HscodeService) => {
    expect(service).toBeTruthy();
  }));
});
