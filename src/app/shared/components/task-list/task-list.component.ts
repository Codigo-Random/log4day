import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  @Input() tasks: Task[] = []

}
