import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitDetailsComponent } from './habit-details.component';

describe('HabitDetailsComponent', () => {
  let component: HabitDetailsComponent;
  let fixture: ComponentFixture<HabitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
