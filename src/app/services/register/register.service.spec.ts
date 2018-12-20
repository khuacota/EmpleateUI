import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RegisterService]
    });
  });

  it('should be created', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
