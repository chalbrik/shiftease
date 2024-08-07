import { Injectable } from '@angular/core';
import { MonthData, DateTag } from './schedule.model';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  constructor() {}

  getDaysInMonth(year: number, month: number): MonthData {
    // Get the last day of the current month
    const lastDay = new Date(year, month + 1, 0).getDate();
    const monthName = new Date(year, month).toLocaleDateString('pl-PL', {
      month: 'long',
    });

    const days: DateTag[] = Array.from({ length: lastDay }, (_, i) => {
      const date = new Date(year, month, i + 1);
      let dayOfTheWeek = date.toLocaleDateString('pl-PL', {
        weekday: 'short',
      });

      // Remove the trailing dot
      if (dayOfTheWeek.endsWith('.')) {
        dayOfTheWeek = dayOfTheWeek.slice(0, -1); // Remove the last character (dot)
      }

      return {
        numberOfTheDay: (i + 1).toString(),
        dayOfTheWeek: dayOfTheWeek,
      };
    });

    return {
      days: days,
      monthName: monthName,
      year: year,
    };
  }
}
