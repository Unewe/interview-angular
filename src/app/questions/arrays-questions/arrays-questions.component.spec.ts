import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysQuestionsComponent } from './arrays-questions.component';

describe('ArraysQuestionsComponent', () => {
  let component: ArraysQuestionsComponent;
  let fixture: ComponentFixture<ArraysQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraysQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
