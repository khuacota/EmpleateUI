import { TestBed, inject } from '@angular/core/testing';

import { BasicInformationService } from './informacion-basica.service';

describe('InformacionBasicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicInformationService]
    });
  });

  it('should be created', inject([BasicInformationService], (service: BasicInformationService) => {
    expect(service).toBeTruthy();
  }));
});
