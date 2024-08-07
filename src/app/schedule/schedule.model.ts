export interface MonthData {
  days: DateTag[];
  monthName: string;
  year: number;
}

export interface DateTag {
  numberOfTheDay: string;
  dayOfTheWeek: string;
}
