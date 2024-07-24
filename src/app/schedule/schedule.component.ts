import { Component, Input } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { EmployeeComponent } from '../employee/employee.component';
import { ScheduleFieldComponent } from '../schedule-field/schedule-field.component';
import { DUMMY_EMPLOYEES } from '../dummy-employees';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [EmployeeComponent, ScheduleFieldComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  employees = DUMMY_EMPLOYEES;
}
