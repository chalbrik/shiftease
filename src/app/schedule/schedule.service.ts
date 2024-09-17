import { Injectable } from '@angular/core';
import { MonthData, DateTag } from './schedule.model';
import { Employee } from '../employees/employee/employee.model';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();

  monthDataValues: { [key: string]: string } = {};

  constructor() {}

  getMonthData(): { [key: string]: string } {
    return this.monthDataValues;
  }

  setMonthDataValues(value: { [key: string]: string }) {
    this.monthDataValues = value;
  }

  getDaysInMonth(): MonthData {
    // Get the last day of the current month
    const lastDay = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
    const monthName = new Date(
      this.currentYear,
      this.currentMonth
    ).toLocaleDateString('pl-PL', {
      month: 'long',
    });

    const days: DateTag[] = Array.from({ length: lastDay }, (_, i) => {
      const date = new Date(this.currentYear, this.currentMonth, i + 1);
      let dayOfTheWeek = date.toLocaleDateString('pl-PL', {
        weekday: 'short',
      });

      // Remove the trailing dot
      if (dayOfTheWeek.endsWith('.')) {
        dayOfTheWeek = dayOfTheWeek.slice(0, -1); // Remove the last character (dot)
      }

      //add 0 before month number if it is single number
      let formattedMonth: string =
        this.currentMonth + 1 < 10
          ? '0' + (this.currentMonth + 1)
          : (this.currentMonth + 1).toString();

      return {
        numberOfTheDay: (i + 1).toString(),
        dayOfTheWeek: dayOfTheWeek,
        numberOfTheMonth: formattedMonth,
        numberOfTheYear: this.currentYear.toString(),
      };
    });

    return {
      days: days,
      monthName: monthName,
      month: this.currentMonth,
      year: this.currentYear,
    };
  }

  goToNextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
  }

  goToPreviousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
  }

  saveMonthData() {
    localStorage.setItem(
      'monthDataValues',
      JSON.stringify(this.monthDataValues)
    );
  }

  loadMonthData() {
    const storedData = localStorage.getItem('monthDataValues');
    if (storedData) {
      this.monthDataValues = JSON.parse(storedData);
    }
  }

  getFieldId(year: string, month: string, day: string) {
    let fullFieldId = '';

    fullFieldId = `${year}-${month}-${day}`;

    return fullFieldId;
  }
}
