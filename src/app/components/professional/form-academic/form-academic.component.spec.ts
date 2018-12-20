import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcademicComponent } from './form-academic.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { InputChipsComponent } from '../../inputs/input-chips/input-chips.component';
import { AcademicTitleComponent } from './academic-title/academic-title.component';
import { FormExpComponent } from './form-exp/form-exp.component';
import { AuthService } from '../../../services/auth/auth.service';

describe('FormAcademicComponent', () => {
  let component: FormAcademicComponent;
  let fixture: ComponentFixture<FormAcademicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [FormAcademicComponent, InputChipsComponent, AcademicTitleComponent, FormExpComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
