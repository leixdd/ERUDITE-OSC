import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMileComponent } from './project-mile.component';

describe('ProjectMileComponent', () => {
  let component: ProjectMileComponent;
  let fixture: ComponentFixture<ProjectMileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
