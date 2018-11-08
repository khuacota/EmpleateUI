import { TestBed, inject } from '@angular/core/testing';

import { OfertaTrabajoService } from './oferta-trabajo.service';

describe('OfertaTrabajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfertaTrabajoService]
    });
  });

  it('should be created', inject([OfertaTrabajoService], (service: OfertaTrabajoService) => {
    expect(service).toBeTruthy();
  }));
});
