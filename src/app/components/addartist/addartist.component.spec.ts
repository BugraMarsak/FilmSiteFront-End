import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddartistComponent } from './addartist.component';

describe('AddartistComponent', () => {
  let component: AddartistComponent;
  let fixture: ComponentFixture<AddartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddartistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
