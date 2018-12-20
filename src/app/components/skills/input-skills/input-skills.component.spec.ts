import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSkillsComponent } from './input-skills.component'
import { MaterialModule } from '../../../modules/material/material.module';

describe('InputSkillsComponent', () => {
  let component: InputSkillsComponent;
  let fixture: ComponentFixture<InputSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ InputSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
