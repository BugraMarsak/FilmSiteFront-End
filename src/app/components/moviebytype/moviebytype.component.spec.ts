import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviebytypeComponent } from './moviebytype.component';

describe('MoviebytypeComponent', () => {
  let component: MoviebytypeComponent;
  let fixture: ComponentFixture<MoviebytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviebytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviebytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
