import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantsComponent } from './postulants.component';

describe('PostulantsComponent', () => {
  let component: PostulantsComponent;
  let fixture: ComponentFixture<PostulantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulantsComponent ]
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
