import { Component } from '@angular/core';

import { PlannerEmployeesComponent } from './planner-employees/planner-employees.component';
import { PlannerScheduleComponent } from './planner-schedule/planner-schedule.component';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [PlannerEmployeesComponent, PlannerScheduleComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css',
})
export class PlannerComponent {}
