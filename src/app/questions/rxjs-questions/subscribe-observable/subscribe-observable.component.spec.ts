import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeObservableComponent } from './subscribe-observable.component';

describe('SubscribeObservableComponent', () => {
  let component: SubscribeObservableComponent;
  let fixture: ComponentFixture<SubscribeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
