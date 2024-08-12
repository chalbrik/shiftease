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
  @Input({ required: true }) fieldIdStart!: string;
  @Input({ required: true })
  numberOfTheDay!: DateTag;
  @Input({ required: true }) employees!: Employee[];

  @Input({ required: true }) scheduleFieldData!: {
    [key: string]: { [key: string]: string };
  };
  //wydaje mi się że teraz muszę rozpakowac te dane i tak je powstawiać żeby wyswietlały się w grafiku

  @Output()
  addScheduleFieldValue = new EventEmitter<{
    [key: string]: string;
  }>();

  //typedValue: { [key: string]: string } = {};
  storedData: { [key: string]: string } = {};

  constructor() {
    // Dodawanie przykładowych danych do obiektu
    this.storedData['2024-07-1-5'] = '10:00';
    this.storedData['2024-08-11-2'] = '12:00';
    this.storedData['2024-08-12-1'] = '13:00';
    this.storedData['2024-08-12-2'] = '17:00';
  }

  //generate key w danym momencie musi generowac ten sam klucz który jest zapisany w stored data
  generateKey(
    day: string,
    month: string,
    year: string,
    employeeId: number
  ): string {
    return `${year}-${month}-${day}-${employeeId}`;
  }

  logTypedValues() {
    console.log(this.scheduleFieldData);
    console.log(this.storedData);
  }
}
