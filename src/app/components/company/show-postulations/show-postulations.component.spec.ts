import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostulationsComponent } from './show-postulations.component';

describe('ShowPostulationsComponent', () => {
  let component: ShowPostulationsComponent;
  let fixture: ComponentFixture<ShowPostulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPostulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
