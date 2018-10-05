import { TestBed, inject } from '@angular/core/testing';

import { Profesion.Service.TsService } from './profesion.service.ts.service';

describe('Profesion.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Profesion.Service.TsService]
    });
  });

  it('should be created', inject([Profesion.Service.TsService], (service: Profesion.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
