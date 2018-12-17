import { TestBed, inject } from '@angular/core/testing';

import { RestrictRoutesService } from './restrict-routes.service';

describe('RestrictRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestrictRoutesService]
    });
  });

  it('should be created', inject([RestrictRoutesService], (service: RestrictRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
