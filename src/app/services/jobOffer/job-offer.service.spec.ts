import { TestBed, inject } from '@angular/core/testing';

import { JobOfferService } from './job-offer.service';
import { HttpClientModule } from '@angular/common/http';

describe('OfertaTrabajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JobOfferService]
    });
  });

  it('should be created', inject([JobOfferService], (service: JobOfferService) => {
    expect(service).toBeTruthy();
  }));
});
