import { Component, Input } from '@angular/core';
import { ScheduleService } from './schedule.service';

import { EmployeeComponent } from '../employee/employee.component';
import { ScheduleFieldComponent } from '../schedule-field/schedule-field.component';

import { DUMMY_EMPLOYEES } from '../dummy-employees';
import { DateTag, MonthData } from './schedule.model';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [EmployeeComponent, ScheduleFieldComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  employees = DUMMY_EMPLOYEES;
  selectedEmployeeId?: string;

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();

  monthData!: MonthData;

  constructor(private scheduleService: ScheduleService) {
    this.loadDaysInMonth();
  }

  loadDaysInMonth() {
    this.monthData = this.scheduleService.getDaysInMonth(
      this.currentYear,
      this.currentMonth
    );
  }

  goToNextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.loadDaysInMonth();
  }

  goToPreviousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.loadDaysInMonth();
  }
}
