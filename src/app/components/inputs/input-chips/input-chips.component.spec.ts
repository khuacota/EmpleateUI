import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChipsComponent } from './input-chips.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';

describe('InputLanguagesComponent', () => {
  let component: InputChipsComponent;
  let fixture: ComponentFixture<InputChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [InputChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
