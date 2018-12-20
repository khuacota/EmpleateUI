import { TestBed, inject } from '@angular/core/testing';

import { BasicInformationService } from './basic-information.service';
import { HttpClientModule } from '@angular/common/http';

describe('InformacionBasicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BasicInformationService]
    });
  });

  it('should be created', inject([BasicInformationService], (service: BasicInformationService) => {
    expect(service).toBeTruthy();
  }));
});
