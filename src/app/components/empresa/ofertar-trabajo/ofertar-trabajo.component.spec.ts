import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertarTrabajoComponent } from './ofertar-trabajo.component';

describe('OfertarTrabajoComponent', () => {
  let component: OfertarTrabajoComponent;
  let fixture: ComponentFixture<OfertarTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertarTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
