import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmploymentComponent } from './search-employment.component';

describe('SearchEmploymentComponent', () => {
  let component: SearchEmploymentComponent;
  let fixture: ComponentFixture<SearchEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
