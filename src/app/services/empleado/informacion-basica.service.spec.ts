import { TestBed, inject } from '@angular/core/testing';

import { InformacionBasicaService } from './informacion-basica.service';

describe('InformacionBasicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionBasicaService]
    });
  });

  it('should be created', inject([InformacionBasicaService], (service: InformacionBasicaService) => {
    expect(service).toBeTruthy();
  }));
});
