import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz2 } from './quiz2';

describe('Quiz2', () => {
  let component: Quiz2;
  let fixture: ComponentFixture<Quiz2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quiz2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
