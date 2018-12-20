import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEmpleadoComponent } from './search-employee.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('BuscarEmpleadoComponent', () => {
  let component: BuscarEmpleadoComponent;
  let fixture: ComponentFixture<BuscarEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [ BuscarEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
