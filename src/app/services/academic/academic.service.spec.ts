import { TestBed, inject } from '@angular/core/testing';

import { AcademicService } from './academic.service';

describe('AcademicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcademicService]
    });
  });

  it('should be created', inject([AcademicService], (service: AcademicService) => {
    expect(service).toBeTruthy();
  }));
});
