import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLegendComponent } from './task-legend.component';

describe('TaskLegendComponent', () => {
  let component: TaskLegendComponent;
  let fixture: ComponentFixture<TaskLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskLegendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
