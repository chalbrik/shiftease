import { Injectable } from '@angular/core';
import { dateTag } from './schedule.model';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  constructor() {}

  currentDate = 8;

  getDaysInMonth(): dateTag[] {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get the last day of the current month
    const lastDay = new Date(year, month + 1, 0).getDate();

    // return Array.from({ length: lastDay }, (_, i) => (i + 1).toString());
    return Array.from({ length: lastDay }, (_, i) => {
      const date = new Date(year, month, i + 1);
      const dayOfTheWeek = date.toLocaleDateString('en-US', {
        weekday: 'long',
      });

      return {
        numberOfTheDay: (i + 1).toString(),
        dayOfTheWeek: dayOfTheWeek,
      };
    });
  }
}
