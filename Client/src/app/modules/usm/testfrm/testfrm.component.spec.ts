import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfrmComponent } from './testfrm.component';

describe('TestfrmComponent', () => {
  let component: TestfrmComponent;
  let fixture: ComponentFixture<TestfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
