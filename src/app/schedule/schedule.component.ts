import { Component, Input } from '@angular/core';
import { ScheduleService } from './schedule.service';

import { EmployeeComponent } from '../employees/employee/employee.component';
import { ScheduleFieldComponent } from '../schedule-field/schedule-field.component';

import { DUMMY_EMPLOYEES } from '../dummy-employees';
import { DateTag, MonthData } from './schedule.model';
import { Employee } from '../employees/employee/employee.model';
import { MonthDaysComponent } from '../month-days/month-days.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [EmployeeComponent, ScheduleFieldComponent, MonthDaysComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  employees = DUMMY_EMPLOYEES;
  selectedEmployeeId?: string;

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();

  //Deklaracja mapy, która będzie przechowywac dane w textarea dla każdego miesiąca
  monthDataValues: { [key: string]: string } = {};

  monthData!: MonthData;

  constructor(private scheduleService: ScheduleService) {
    this.loadDaysInMonth();

    const storedData = localStorage.getItem('monthDataValues');
    if (storedData) {
      this.monthDataValues = JSON.parse(storedData);
    }
  }

  saveMonthData() {
    localStorage.setItem(
      'monthDataValues',
      JSON.stringify(this.monthDataValues)
    );
  }

  //generowanie unikalnego klucza dla każdego miesiąca
  //klucze będą używane w mapie do zapisywanie danych w danym miesiącu
  getMonthKey(year: number, month: number): string {
    return `${year}-${('0' + (month + 1)).slice(-2)}`;
  }

  loadDaysInMonth() {
    const monthKey = this.getMonthKey(this.currentYear, this.currentMonth);

    this.monthData = this.scheduleService.getDaysInMonth(
      this.currentYear,
      this.currentMonth
    );

    // Sprawdź, czy klucz istnieje, jeśli nie, zainicjuj pusty obiekt
  }

  goToNextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.loadDaysInMonth();
  }

  goToPreviousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.loadDaysInMonth();
  }

  onAddScheduleFieldValue(scheduleFieldValue: { [key: string]: string }) {
    //const monthKey = this.getMonthKey(this.currentYear, this.currentMonth);

    this.monthDataValues = scheduleFieldValue;
    this.saveMonthData();
  }

  getFieldId(year: string, month: string, day: string) {
    let fullFieldId = '';

    fullFieldId = `${year}-${month}-${day}`;

    return fullFieldId;
  }

  // getScheduleFieldData(day: string): { [key: string]: string } {
  //   const monthKey = this.getMonthKey(this.currentYear, this.currentMonth);
  //   return this.monthDataObject[monthKey] || {};
  // }

  logTypedValues() {
    console.log(this.monthDataValues);
  }
}
