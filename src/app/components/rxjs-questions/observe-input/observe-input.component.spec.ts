import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveInputComponent } from './observe-input.component';

describe('ObserveInputComponent', () => {
  let component: ObserveInputComponent;
  let fixture: ComponentFixture<ObserveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserveInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
