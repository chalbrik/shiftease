//Możliwe, że trzeba będzie usunąć ten plik

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private currentDate = new Date();
  private dateSubject = new BehaviorSubject<Date>(this.currentDate);

  date$ = this.dateSubject.asObservable();

  constructor() {}

  getDaysInMonth(date: Date): number[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  changeMonth(offset: number): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.dateSubject.next(new Date(this.currentDate));
  }
}
