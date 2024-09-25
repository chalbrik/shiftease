import { Component } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { EmployeeComponent } from '../employee/employee.component';
import { DataCardComponent } from '../data-card/data-card.component';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';
import { NewEmployeeData } from '../employee/employee.model';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employees-data',
  standalone: true,
  imports: [EmployeeComponent, DataCardComponent, AddNewEmployeeComponent],
  templateUrl: './employees-data.component.html',
  styleUrl: './employees-data.component.css',
})
export class EmployeesDataComponent {
  employees = this.employeeService.getEmployees();
  selectedEmployeeId?: number;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  get selectedEmployee() {
    return this.employees.find(
      (employee) => employee.id === this.selectedEmployeeId
    )!;
  }

  onSelectEmployee(id: number) {
    this.selectedEmployeeId = id;
  }

  onStartAddNewEmpolyee() {
    const dialogRef = this.dialog.open(AddNewEmployeeComponent, {
      height: '60%',
      width: '60%',
      panelClass: 'add-employee-dialog',
    });

    dialogRef.afterClosed().subscribe((newEmployeeData: NewEmployeeData) => {
      if (newEmployeeData) {
        this.onAddNewEmployee(newEmployeeData);
      }
    });
  }

  onAddNewEmployee(newEmployeeData: NewEmployeeData) {
    this.employees.push({
      id: this.employees.length + 1,
      name: newEmployeeData.name,
      last_name: newEmployeeData.last_name,
      phone_number: newEmployeeData.phone_number,
      email_address: newEmployeeData.email_address,
      start_hire_date: newEmployeeData.start_hire_date,
      end_hire_date: newEmployeeData.end_hire_date,
      contract_type: newEmployeeData.contract_type,
    });
  }
}
