import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDownloadComponent } from './film-download.component';

describe('FilmDownloadComponent', () => {
  let component: FilmDownloadComponent;
  let fixture: ComponentFixture<FilmDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
