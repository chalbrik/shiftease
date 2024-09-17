import { Component, inject, OnInit, effect } from '@angular/core';
import { PlannerScheduleFieldComponent } from '../planner-schedule-field/planner-schedule-field.component';
import { ChangeMonthButtonsComponent } from '../change-month-buttons/change-month-buttons.component';
import { EmployeeService } from '../../employees/employee.service';
import { PlanerScheduleService } from '../planer-schedule.service';
import { Employee } from '../../employees/employee/employee.model';
import { MonthDaysData } from '../planner-schedule.model';

@Component({
  selector: 'app-planner-schedule',
  standalone: true,
  imports: [PlannerScheduleFieldComponent, ChangeMonthButtonsComponent],
  templateUrl: './planner-schedule.component.html',
  styleUrl: './planner-schedule.component.css',
})
export class PlannerScheduleComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private plannerScheduleService = inject(PlanerScheduleService);

  employees: Employee[] = [];
  monthDaysData: MonthDaysData[] = [];
  monthName: string = '';
  year?: number;
  month?: number;

  constructor() {
    effect(() => {
      this.monthDaysData = this.plannerScheduleService.monthDaysData();
      this.monthName = this.plannerScheduleService.monthName();
      this.year = this.plannerScheduleService.year();
      this.month = this.plannerScheduleService.month() + 1;
    });
  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  generateStartFieldId(employeeId: number): string {
    return employeeId.toString() + '-' + this.month?.toString() + '-';
  }

  onSave() {}
}
