import { TestBed, inject } from '@angular/core/testing';

import { JobOfferService } from './oferta-trabajo.service';

describe('OfertaTrabajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobOfferService]
    });
  });

  it('should be created', inject([JobOfferService], (service: JobOfferService) => {
    expect(service).toBeTruthy();
  }));
});
