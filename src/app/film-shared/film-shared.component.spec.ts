import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSharedComponent } from './film-shared.component';

describe('FilmSharedComponent', () => {
  let component: FilmSharedComponent;
  let fixture: ComponentFixture<FilmSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
