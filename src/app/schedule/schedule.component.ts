import { Component, Input } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { EmployeeService } from '../employees/employee.service';

import { EmployeeComponent } from '../employees/employee/employee.component';
import { ScheduleFieldComponent } from './schedule-field/schedule-field.component';

import { DateTag, MonthData } from './schedule.model';
import { Employee } from '../employees/employee/employee.model';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [EmployeeComponent, ScheduleFieldComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  employees = this.employeeService.getEmployees();
  selectedEmployeeId?: string;

  //Deklaracja mapy, która będzie przechowywac dane w textarea dla każdego miesiąca
  monthDataValues: { [key: string]: string } =
    this.scheduleService.getMonthData();

  monthData!: MonthData;

  constructor(
    private scheduleService: ScheduleService,
    private employeeService: EmployeeService
  ) {
    this.loadDaysInMonth();
    this.scheduleService.loadMonthData();
  }

  loadDaysInMonth() {
    this.monthData = this.scheduleService.getDaysInMonth();
  }

  goToNextMonth() {
    this.scheduleService.goToNextMonth();
    this.loadDaysInMonth();
  }

  goToPreviousMonth() {
    this.scheduleService.goToPreviousMonth();
    this.loadDaysInMonth();
  }

  onAddScheduleFieldValue(scheduleFieldValue: { [key: string]: string }) {
    this.scheduleService.setMonthDataValues(scheduleFieldValue);
    this.scheduleService.saveMonthData();
  }

  getFieldId(year: string, month: string, day: string) {
    return this.scheduleService.getFieldId(year, month, day);
  }

  capitalizeFirstLetter(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
