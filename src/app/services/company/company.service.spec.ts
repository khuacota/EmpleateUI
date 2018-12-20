import { TestBed, inject } from '@angular/core/testing';

import { CompanyService } from './company.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmpresaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CompanyService]
    });
  });

  it('should be created', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
