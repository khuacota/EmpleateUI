import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcademicComponent } from './form-academic.component';

describe('FormAcademicComponent', () => {
  let component: FormAcademicComponent;
  let fixture: ComponentFixture<FormAcademicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAcademicComponent ]
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
