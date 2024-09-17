import { Component, inject } from '@angular/core';

import { PlanerScheduleService } from '../planer-schedule.service';

@Component({
  selector: 'app-change-month-buttons',
  standalone: true,
  imports: [],
  templateUrl: './change-month-buttons.component.html',
  styleUrl: './change-month-buttons.component.css',
})
export class ChangeMonthButtonsComponent {
  private plannerScheduleService = inject(PlanerScheduleService);

  goToPreviousMonth() {
    this.plannerScheduleService.goToPreviousMonth();
  }

  goToNextMonth() {
    this.plannerScheduleService.goToNextMonth();
  }
}
