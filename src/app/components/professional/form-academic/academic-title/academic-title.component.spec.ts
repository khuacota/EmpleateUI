import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicTitleComponent } from './academic-title.component';
import { MaterialModule } from '../../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AcademicTitleComponent', () => {
  let component: AcademicTitleComponent;
  let fixture: ComponentFixture<AcademicTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [ AcademicTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
