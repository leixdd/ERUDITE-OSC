import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdashComponent } from './projectdash.component';

describe('ProjectdashComponent', () => {
  let component: ProjectdashComponent;
  let fixture: ComponentFixture<ProjectdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
