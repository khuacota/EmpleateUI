import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegistrationComponent } from './company-registration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../modules/material/material.module';

describe('RegistroEmpresaComponent', () => {
  let component: CompanyRegistrationComponent;
  let fixture: ComponentFixture<CompanyRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [CompanyRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
