import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLanguagesComponent } from './input-languages.component';

describe('InputLanguagesComponent', () => {
  let component: InputLanguagesComponent;
  let fixture: ComponentFixture<InputLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
