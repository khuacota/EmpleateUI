import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompleteInformationEmployeeComponent } from './show-complete-information-employee.component';

describe('ShowCompleteInformationEmployeeComponent', () => {
  let component: ShowCompleteInformationEmployeeComponent;
  let fixture: ComponentFixture<ShowCompleteInformationEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCompleteInformationEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompleteInformationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
