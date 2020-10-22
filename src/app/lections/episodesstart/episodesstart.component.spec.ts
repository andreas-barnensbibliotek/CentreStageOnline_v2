import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesstartComponent } from './episodesstart.component';

describe('EpisodesstartComponent', () => {
  let component: EpisodesstartComponent;
  let fixture: ComponentFixture<EpisodesstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
