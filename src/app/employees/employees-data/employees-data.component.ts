import { Component } from '@angular/core';
import { DUMMY_EMPLOYEES } from '../../dummy-employees';
import { EmployeeComponent } from '../employee/employee.component';
import { DataCardComponent } from '../data-card/data-card.component';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';
import { NewEmployeeData } from '../employee/employee.model';

@Component({
  selector: 'app-employees-data',
  standalone: true,
  imports: [EmployeeComponent, DataCardComponent, AddNewEmployeeComponent],
  templateUrl: './employees-data.component.html',
  styleUrl: './employees-data.component.css',
})
export class EmployeesDataComponent {
  employees = DUMMY_EMPLOYEES;
  selectedEmployeeId?: number;

  isAddingNewEmployee: boolean = false;

  get selectedEmployee() {
    return this.employees.find(
      (employee) => employee.id === this.selectedEmployeeId
    )!;
  }

  onSelectEmployee(id: number) {
    this.selectedEmployeeId = id;
  }

  onStartAddNewEmpolyee() {
    this.isAddingNewEmployee = true;
  }

  onCancelAddNewEmployee() {
    this.isAddingNewEmployee = false;
  }

  onAddNewEmployee(newEmployeeData: NewEmployeeData) {
    this.employees.push({
      id: this.employees.length + 1,
      name: newEmployeeData.name,
      last_name: newEmployeeData.last_name,
      phone_number: newEmployeeData.phone_number,
      email_address: newEmployeeData.email_address,
    });
    this.isAddingNewEmployee = false;
  }
}
