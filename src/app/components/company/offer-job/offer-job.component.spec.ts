import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferComponent } from './offer-job.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { InputChipsComponent } from '../../inputs/input-chips/input-chips.component';
import { InputSkillsComponent } from '../../skills/input-skills/input-skills.component';
import { AuthService } from '../../../services/auth/auth.service';


describe('JobOfferComponent', () => {
  let component: JobOfferComponent;
  let fixture: ComponentFixture<JobOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [JobOfferComponent, InputChipsComponent, InputSkillsComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
