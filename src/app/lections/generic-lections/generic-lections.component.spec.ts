import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericLectionsComponent } from './generic-lections.component';

describe('GenericLectionsComponent', () => {
  let component: GenericLectionsComponent;
  let fixture: ComponentFixture<GenericLectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericLectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericLectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
