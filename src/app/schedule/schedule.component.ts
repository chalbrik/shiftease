import { Component, Input } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { EmployeeComponent } from '../employee/employee.component';
import { ScheduleFieldComponent } from '../schedule-field/schedule-field.component';
import { DUMMY_EMPLOYEES } from '../dummy-employees';
import { dateTag } from './schedule.model';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [EmployeeComponent, ScheduleFieldComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  employees = DUMMY_EMPLOYEES;
  //tutaj trzeba zrobić tablice z numerami dat w miesiącu
  //potrzebuję tablicy z numerami i nazwami dni w miesiącu

  constructor(private scheduleService: ScheduleService) {}

  // get currentDayDate(){

  // }

  get daysOfCurrentMonth(): dateTag[] {
    return this.scheduleService.getDaysInMonth();
  }
}
