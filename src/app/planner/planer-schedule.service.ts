import { Injectable, signal, computed } from '@angular/core';
import { MonthDaysData } from './planner-schedule.model';

@Injectable({
  providedIn: 'root',
})
export class PlanerScheduleService {
  year = signal(new Date().getFullYear());
  month = signal(new Date().getMonth());

  private monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Tworzenie computed dla nazwy miesiąca na podstawie sygnału month
  monthName = computed(() => this.monthNames[this.month()]);

  // Tworzenie computed dla danych dni w miesiącu na podstawie sygnałów year i month
  monthDaysData = computed((): MonthDaysData[] => {
    const daysInMonth = new Date(this.year(), this.month() + 1, 0).getDate();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthDataArray: MonthDaysData[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      let date = new Date(this.year(), this.month(), day);
      monthDataArray.push({
        day: day,
        dayName: dayNames[date.getDay()],
      });
    }

    return monthDataArray;
  });

  goToNextMonth() {
    this.month.update((month) => month + 1);
    if (this.month() > 11) {
      this.month.set(0);
      this.year.update((year) => year + 1);
    }
  }

  goToPreviousMonth() {
    this.month.update((month) => month - 1);
    if (this.month() < 0) {
      this.month.set(11);
      this.year.update((year) => year - 1);
    }
  }

  // Dane grafiku

  private scheduleValues = signal<{ [key: string]: string }>({
    '1-9-13': '10:00-16:00',
  });

  saveScheduleValue(inputValue: { [key: string]: string }) {
    this.scheduleValues.update((prevValues) => ({
      ...prevValues,
      ...inputValue, // Dodaje lub aktualizuje wartości z inputValue
    }));
  }

  getMappedInputValues() {
    return this.scheduleValues();
  }
}
