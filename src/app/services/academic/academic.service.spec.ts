import { TestBed, inject } from '@angular/core/testing';

import { AcademicService } from './academic.service';
import { HttpClientModule } from '@angular/common/http';

describe('AcademicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AcademicService]
    });
  });

  it('should be created', inject([AcademicService], (service: AcademicService) => {
    expect(service).toBeTruthy();
  }));
});
