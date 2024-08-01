import { Component, Input } from '@angular/core';
import { dateTag } from '../schedule/schedule.model';

@Component({
  selector: 'app-schedule-field',
  standalone: true,
  imports: [],
  templateUrl: './schedule-field.component.html',
  styleUrl: './schedule-field.component.css',
})
export class ScheduleFieldComponent {
  @Input({ required: true }) numberOfTheDay!: dateTag;
}
