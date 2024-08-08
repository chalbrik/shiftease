import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTag } from '../schedule/schedule.model';
import { Employee } from '../employees/employee/employee.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './schedule-field.component.html',
  styleUrl: './schedule-field.component.css',
})
export class ScheduleFieldComponent {
  @Input({ required: true }) numberOfTheDay!: DateTag;
  @Input({ required: true }) employees!: Employee[];

  @Input({ required: true }) scheduleFieldData!: {
    [key: string]: { [key: string]: string };
  };
  //wydaje mi się że teraz muszę rozpakowac te dane i tak je powstawiać żeby wyswietlały się w grafiku

  @Output()
  addScheduleFieldValue = new EventEmitter<{
    [key: string]: string;
  }>();

  typedValue: { [key: string]: string } = {};

  generateKey(day: string, employeeId: number): string {
    return `${day}-${employeeId}`;
  }

  onBlur() {
    this.addScheduleFieldValue.emit(this.typedValue);
  }

  logTypedValues() {
    console.log(this.scheduleFieldData);
  }
}
