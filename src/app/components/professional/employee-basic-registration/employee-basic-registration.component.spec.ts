import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBasicRegistrationComponent } from './employee-basic-registration.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RegistroEmpleadoBasicoComponent', () => {
  let component: EmployeeBasicRegistrationComponent;
  let fixture: ComponentFixture<EmployeeBasicRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [ EmployeeBasicRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBasicRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
