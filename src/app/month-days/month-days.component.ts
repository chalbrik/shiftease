import { Component, Input } from '@angular/core';
import { DateTag } from '../schedule/schedule.model';

@Component({
  selector: 'app-month-days',
  standalone: true,
  imports: [],
  templateUrl: './month-days.component.html',
  styleUrl: './month-days.component.css',
})
export class MonthDaysComponent {
  @Input({ required: true }) monthDays!: DateTag;
}
