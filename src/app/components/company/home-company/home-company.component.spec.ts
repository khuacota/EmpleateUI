import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompanyComponent } from './home-company.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../services/auth/auth.service';

describe('HomeCompanyComponent', () => {
  let component: HomeCompanyComponent;
  let fixture: ComponentFixture<HomeCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [HomeCompanyComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
