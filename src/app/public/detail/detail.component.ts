import { Component, OnInit } from '@angular/core';
import { TaskBarComponent } from "../../shared/components/task-bar/task-bar.component";
import { TaskListComponent } from "../../shared/components/task-list/task-list.component";
import { AddTaskComponent } from "../../shared/components/add-task/add-task.component";
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [TaskBarComponent, TaskListComponent, AddTaskComponent, DatePipe],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  showAddView = false
  date?: Date

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const paramDate = this.route.snapshot.paramMap.get("date")?.toString() ?? ""
    this.date = new Date(paramDate)
  }

  displayAddView() {
    this.showAddView = !this.showAddView
  }

}
