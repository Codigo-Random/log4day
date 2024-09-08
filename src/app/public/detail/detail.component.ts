import { Component, OnInit } from '@angular/core';
import { TaskBarComponent } from "../../shared/components/task-bar/task-bar.component";
import { TaskListComponent } from "../../shared/components/task-list/task-list.component";
import { AddTaskComponent } from "../../shared/components/add-task/add-task.component";
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../shared/models/task';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [TaskBarComponent, TaskListComponent, AddTaskComponent, DatePipe],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  showAddView = false
  date?: Date
  tasks: Task[] = []

  constructor(private route: ActivatedRoute, private ts: TaskService) {

  }

  ngOnInit(): void {
    const paramDate = this.route.snapshot.paramMap.get("date")?.toString() ?? ""
    this.date = new Date(paramDate)
    this.loadData()
  }

  loadData() {
    this.tasks = this.ts.getTaskByDate(this.date!!)
  }

  displayAddView() {
    this.showAddView = !this.showAddView
    this.loadData()
  }

}
