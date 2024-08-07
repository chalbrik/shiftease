import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { NewEmployeeData } from '../employee/employee.model';

@Component({
  selector: 'app-add-new-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-employee.component.html',
  styleUrl: './add-new-employee.component.css',
})
export class AddNewEmployeeComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewEmployeeData>();

  enteredFirstName: string = '';
  enteredLastName: string = '';
  enteredPhoneNumber: string = '';
  enteredEmail: string = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.add.emit({
      name: this.enteredFirstName,
      last_name: this.enteredLastName,
      phone_number: this.enteredPhoneNumber,
      email_address: this.enteredEmail,
    });
  }
}
