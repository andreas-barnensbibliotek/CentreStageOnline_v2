import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectionMainComponent } from './lection-main.component';

describe('LectionMainComponent', () => {
  let component: LectionMainComponent;
  let fixture: ComponentFixture<LectionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
