import { Component, inject, OnInit } from '@angular/core';

import { EmployeeService } from '../../employees/employee.service';
import { Employee } from '../../employees/employee/employee.model';

@Component({
  selector: 'app-planner-employees',
  standalone: true,
  imports: [],
  templateUrl: './planner-employees.component.html',
  styleUrl: './planner-employees.component.css',
})
export class PlannerEmployeesComponent implements OnInit {
  private employeeService = inject(EmployeeService);

  employees: Employee[] = [];

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
