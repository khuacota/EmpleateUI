import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantsComponent } from './postulants.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmploymentInformationComponent } from '../../professional/search-employment/employment-information/employment-information.component';
import { AuthService } from '../../../services/auth/auth.service';

describe('PostulantsComponent', () => {
  let component: PostulantsComponent;
  let fixture: ComponentFixture<PostulantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [PostulantsComponent, EmploymentInformationComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
