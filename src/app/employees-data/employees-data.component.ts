import { Component } from '@angular/core';
import { DUMMY_EMPLOYEES } from '../dummy-employees';
import { EmployeeComponent } from '../employee/employee.component';
import { DataCardComponent } from '../data-card/data-card.component';

@Component({
  selector: 'app-employees-data',
  standalone: true,
  imports: [EmployeeComponent, DataCardComponent],
  templateUrl: './employees-data.component.html',
  styleUrl: './employees-data.component.css',
})
export class EmployeesDataComponent {
  employees = DUMMY_EMPLOYEES;
  selectedEmployeeId?: string;

  get selectedEmployee() {
    return this.employees.find(
      (employee) => employee.id === this.selectedEmployeeId
    )!;
  }

  onSelectEmployee(id: string) {
    this.selectedEmployeeId = id;
  }
}
