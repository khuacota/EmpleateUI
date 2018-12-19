import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChipsComponent } from './input-chips.component';

describe('InputLanguagesComponent', () => {
  let component: InputChipsComponent;
  let fixture: ComponentFixture<InputChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
