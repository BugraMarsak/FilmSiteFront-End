import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmmaComponent } from './addmma.component';

describe('AddmmaComponent', () => {
  let component: AddmmaComponent;
  let fixture: ComponentFixture<AddmmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
