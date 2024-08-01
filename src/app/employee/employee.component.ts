import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  @Input({ required: true }) employee!: Employee;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  onSelectEmployee() {
    this.select.emit(this.employee.id);
  }
}
