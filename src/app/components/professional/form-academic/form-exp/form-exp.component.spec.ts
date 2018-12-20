import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpComponent } from './form-exp.component';
import { MaterialModule } from '../../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FormExpComponent', () => {
  let component: FormExpComponent;
  let fixture: ComponentFixture<FormExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [ FormExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
