import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTag } from '../schedule/schedule.model';
import { Employee } from '../employees/employee/employee.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-field',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './schedule-field.component.html',
  styleUrl: './schedule-field.component.css',
})
export class ScheduleFieldComponent {
  @Input({ required: true }) fieldIdStart!: string;
  @Input({ required: true })
  numberOfTheDay!: DateTag;
  @Input({ required: true }) employees!: Employee[];

  @Input({ required: true }) scheduleFieldData!: { [key: string]: string };
  //wydaje mi się że teraz muszę rozpakowac te dane i tak je powstawiać żeby wyswietlały się w grafiku

  @Output()
  addScheduleFieldValue = new EventEmitter<{
    [key: string]: string;
  }>();

  //typedValue: { [key: string]: string } = {};
  storedData: { [key: string]: string } = {};

  constructor() {
    // Dodawanie przykładowych danych do obiektu
    // this.storedData = { ...this.scheduleFieldData };
    console.log(this.scheduleFieldData);
  }

  trackById(index: number, employee: Employee): number {
    return employee.id;
  }

  ngOnInit() {
    console.log(this.scheduleFieldData);
    this.storedData = { ...this.scheduleFieldData };
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

  addValueToScheduleComponent() {
    //console.log(this.storedData);
    this.addScheduleFieldValue.emit(this.storedData);
  }

  logTypedValues() {
    console.log(this.scheduleFieldData);
    console.log(this.storedData);
  }

  // trackById(index: number, employee: any): number {
  //   return employee.id;
  // }
}
