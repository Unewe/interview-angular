import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDirectivesComponent } from './multiple-directives.component';

describe('MultipleDirectivesComponent', () => {
  let component: MultipleDirectivesComponent;
  let fixture: ComponentFixture<MultipleDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
