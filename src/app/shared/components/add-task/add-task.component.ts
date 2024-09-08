import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { min } from 'rxjs';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input() selectedDate = new Date();

  mForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, private ts: TaskService) {
    this.mForm = this.fb.group({
      project: [],
      color: [],
      title: [],
      info: [],
      start: [],
      duration: ['', Validators.required]
    })
  }

  closeModal() {
    this.close.emit()
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.mForm.value);

    const fData = this.mForm.value
    const [hours, minutes] = fData.start.split(':');

    const mTask: Task = {
      title: fData.title,
      description: fData.info,
      project: fData.project,
      projectColor: fData.color,
      duration: fData.duration,
      startTime: new Date(this.selectedDate.setHours(hours, minutes, 0, 0)).toUTCString(),
      createdAt: new Date()
    }

    this.ts.saveTask(mTask)

    this.close.emit()
  }
}
