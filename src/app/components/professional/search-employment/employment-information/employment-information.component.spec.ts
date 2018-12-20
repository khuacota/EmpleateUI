import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentInformationComponent } from './employment-information.component';
import { MaterialModule } from '../../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../../services/auth/auth.service';

describe('EmploymentInformationComponent', () => {
  let component: EmploymentInformationComponent;
  let fixture: ComponentFixture<EmploymentInformationComponent>;
  let Service: AuthService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [EmploymentInformationComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    Service = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
