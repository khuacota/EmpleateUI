import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInformationComponent } from './employee-information.component';
import { MaterialModule } from '../../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeeInformationComponent', () => {
  let component: EmployeeInformationComponent;
  let fixture: ComponentFixture<EmployeeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [ EmployeeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
