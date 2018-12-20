import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompleteInformationEmployeeComponent } from './show-complete-information-employee.component';
import { MaterialModule } from '../../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ShowCompleteInformationEmployeeComponent', () => {
  let component: ShowCompleteInformationEmployeeComponent;
  let fixture: ComponentFixture<ShowCompleteInformationEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [ ShowCompleteInformationEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompleteInformationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
