import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz1 } from './quiz1';

describe('Quiz1', () => {
  let component: Quiz1;
  let fixture: ComponentFixture<Quiz1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quiz1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
