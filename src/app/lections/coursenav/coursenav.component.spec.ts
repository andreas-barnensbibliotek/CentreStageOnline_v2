import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenavComponent } from './coursenav.component';

describe('CoursenavComponent', () => {
  let component: CoursenavComponent;
  let fixture: ComponentFixture<CoursenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
