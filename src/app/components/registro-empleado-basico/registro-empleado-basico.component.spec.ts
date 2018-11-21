import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmpleadoBasicoComponent } from './registro-empleado-basico.component';

describe('RegistroEmpleadoBasicoComponent', () => {
  let component: RegistroEmpleadoBasicoComponent;
  let fixture: ComponentFixture<RegistroEmpleadoBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEmpleadoBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEmpleadoBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
