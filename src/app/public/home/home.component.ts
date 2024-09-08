import { Component } from '@angular/core';
import { MonthCardComponent } from "../../shared/components/month-card/month-card.component";

@Component({
  standalone: true,
  imports: [MonthCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  selectedDate

  constructor() {
    this.selectedDate = new Date()
  }

}
