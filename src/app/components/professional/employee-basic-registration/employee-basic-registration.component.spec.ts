import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBasicRegistrationComponent } from './employee-basic-registration.component';

describe('RegistroEmpleadoBasicoComponent', () => {
  let component: EmployeeBasicRegistrationComponent;
  let fixture: ComponentFixture<EmployeeBasicRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
