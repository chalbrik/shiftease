import {
  Component,
  effect,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { PlanerScheduleService } from '../planer-schedule.service';
import { MonthDaysData } from '../planner-schedule.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planner-schedule-field',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './planner-schedule-field.component.html',
  styleUrl: './planner-schedule-field.component.css',
})
export class PlannerScheduleFieldComponent {
  private plannerScheduleService = inject(PlanerScheduleService);

  @Input({ required: true }) startFieldId!: string;

  monthDaysData: MonthDaysData[] = [];
  inputValues: { [key: string]: string } = {};

  constructor() {
    effect(() => {
      this.monthDaysData = this.plannerScheduleService.monthDaysData();
      this.loadInputValues();
    });
  }

  generateFullFieldId(day: number) {
    return this.startFieldId + day;
  }

  onChange() {
    this.plannerScheduleService.saveScheduleValue(this.inputValues);
  }

  getMappedInputValues() {
    this.plannerScheduleService.getMappedInputValues();
  }

  loadInputValues() {
    this.inputValues = this.plannerScheduleService.getMappedInputValues();
  }
}
