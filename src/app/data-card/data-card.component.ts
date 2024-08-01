import { Component, Input } from '@angular/core';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.css',
})
export class DataCardComponent {
  @Input({ required: true }) employeeData!: Employee;
}
