import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RestrictRoutesService } from './restrict-routes.service';

describe('RestrictRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [RestrictRoutesService]
    });
  });

  it('should be created', inject([RestrictRoutesService], (service: RestrictRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
