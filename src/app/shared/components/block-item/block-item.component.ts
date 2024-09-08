import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskColorPipe } from '../../pipes/task-color.pipe';
import { DayTasks } from '../../models/day-tasks';

@Component({
  selector: 'block-item',
  standalone: true,
  imports: [NgClass, TaskColorPipe],
  templateUrl: './block-item.component.html'
})
export class BlockItemComponent implements OnInit {

  @Input() day?: DayTasks
  @Output() selectedDay = new EventEmitter<Date>();

  title = 'block-item';

  isTooltipVisible: boolean = false;

  ngOnInit(): void {

  }

  showTooltip() {
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }

  selectDay() {
    this.selectedDay.emit(this.day?.date)
  }
}
