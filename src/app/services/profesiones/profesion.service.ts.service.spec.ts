import { TestBed, inject } from '@angular/core/testing';

import { ProfesionService } from './profesion.service.ts.service';

describe('Profession.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesionService]
    });
  });

  it('should be created', inject([ProfesionService], (service: ProfesionService) => {
    expect(service).toBeTruthy();
  }));
});
