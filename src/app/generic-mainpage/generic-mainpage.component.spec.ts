import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMainpageComponent } from './generic-mainpage.component';

describe('GenericMainpageComponent', () => {
  let component: GenericMainpageComponent;
  let fixture: ComponentFixture<GenericMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
