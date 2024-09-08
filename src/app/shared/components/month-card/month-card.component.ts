import { Component, Input, OnInit } from '@angular/core';
import { BlockItemComponent } from "../block-item/block-item.component";
import { DayTasks } from '../../models/day-tasks';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'month-card',
  standalone: true,
  imports: [BlockItemComponent, DatePipe],
  templateUrl: './month-card.component.html'
})
export class MonthCardComponent implements OnInit {
  @Input() selectedDate!: Date; // 0-11, donde 0 es enero y 11 es diciembre
  weeks: DayTasks[][] = [];

  constructor(private router: Router, private ts: TaskService) {

  }

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const currentYear = new Date().getUTCFullYear();

    const firstDayOfMonth = new Date(Date.UTC(currentYear, this.selectedDate.getUTCMonth(), 1));
    const lastDayOfMonth = new Date(Date.UTC(currentYear, this.selectedDate.getUTCMonth() + 1, 0));

    const startDate = new Date(firstDayOfMonth);
    startDate.setUTCDate(startDate.getUTCDate() - ((startDate.getUTCDay() + 6) % 7)); // Ajustar al lunes anterior

    const endDate = new Date(lastDayOfMonth);
    endDate.setUTCDate(endDate.getUTCDate() + (7 - endDate.getUTCDay()) % 7); // Ajustar al domingo siguiente

    this.weeks = [];
    let currentWeek: DayTasks[] = [];

    for (let d = new Date(startDate); d <= endDate; d.setUTCDate(d.getUTCDate() + 1)) {
      if (currentWeek.length === 7) {
        this.weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push({
        date: this.toLocalDate(d),
        isCurrentMonth: d.getUTCMonth() === this.selectedDate.getUTCMonth(),
        tasks: this.ts.getTaskByDate(d)
      });
    }

    if (currentWeek.length > 0) {
      this.weeks.push(currentWeek);
    }
  }

  // Método para convertir fecha UTC a local
  private toLocalDate(utcDate: Date): Date {
    return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
  }

  detail(day: Date) {
    this.router.navigate(["detail", day.toISOString()])
  }
}
