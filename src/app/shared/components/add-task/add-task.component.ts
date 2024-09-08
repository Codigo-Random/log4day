import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit()
  }
}
