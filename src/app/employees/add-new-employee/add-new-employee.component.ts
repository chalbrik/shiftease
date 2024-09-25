import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { NewEmployeeData } from '../employee/employee.model';
import { ContractTypes } from '../employee/employee.model';

import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-new-employee',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInput,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './add-new-employee.component.html',
  styleUrl: './add-new-employee.component.css',
})
export class AddNewEmployeeComponent implements OnInit {
  contracts: ContractTypes[] = [
    { contractType: 'UZ', viewContractType: 'Umowa na zlecenie' },
    { contractType: 'UOP', viewContractType: 'Umowa o pracę' },
    { contractType: 'b2b', viewContractType: 'b2b' },
  ];

  enteredFirstName: string = '';
  enteredLastName: string = '';
  enteredPhoneNumber: string = '';
  enteredEmail: string = '';
  enteredStartHireDate!: Date;
  enteredEndHireDate!: Date;
  selectedContractType!: string;

  constructor(public dialogRef: MatDialogRef<AddNewEmployeeComponent>) {}

  ngOnInit() {
    this.dialogRef.updateSize('80%', '80%');
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    const newEmployee: NewEmployeeData = {
      name: this.enteredFirstName,
      last_name: this.enteredLastName,
      phone_number: this.enteredPhoneNumber,
      email_address: this.enteredEmail,
      start_hire_date: this.enteredStartHireDate.toISOString().split('T')[0],
      end_hire_date: this.enteredEndHireDate.toISOString().split('T')[0],
      contract_type: this.selectedContractType,
    };

    this.dialogRef.close(newEmployee);
  }
}
