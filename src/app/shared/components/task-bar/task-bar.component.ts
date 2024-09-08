import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'task-bar',
  standalone: true,
  imports: [],
  templateUrl: './task-bar.component.html'
})
export class TaskBarComponent {

  @Input() tasks: Task[] = []

}
