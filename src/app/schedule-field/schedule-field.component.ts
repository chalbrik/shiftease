import { Component, Input } from '@angular/core';
import { DateTag } from '../schedule/schedule.model';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-schedule-field',
  standalone: true,
  imports: [],
  templateUrl: './schedule-field.component.html',
  styleUrl: './schedule-field.component.css',
})
export class ScheduleFieldComponent {
  @Input({ required: true }) numberOfTheDay!: DateTag;
  @Input({ required: true }) employees!: Employee[];
}
