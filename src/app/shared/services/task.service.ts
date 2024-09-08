import { Injectable } from '@angular/core';
import { DayTasks } from '../models/day-tasks';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  _KEYTASK = "dayTask"

  constructor() { }

  saveTask(task: Task) {
    const storedTasks = localStorage.getItem(this._KEYTASK);
    let parsedTasks: Task[] = [];
    if (storedTasks) {
      parsedTasks = JSON.parse(storedTasks);
    }

    parsedTasks.push(task)
    localStorage.setItem(this._KEYTASK, JSON.stringify(parsedTasks));
  }

  getAllTasks(): Task[] {
    const storedTasks = localStorage.getItem(this._KEYTASK);
    let parsedTasks: Task[] = [];
    if (storedTasks) {
      parsedTasks = JSON.parse(storedTasks);
    }
    return parsedTasks
  }


}
