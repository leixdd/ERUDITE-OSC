import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectinitComponent } from './projectinit.component';

describe('ProjectinitComponent', () => {
  let component: ProjectinitComponent;
  let fixture: ComponentFixture<ProjectinitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectinitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
