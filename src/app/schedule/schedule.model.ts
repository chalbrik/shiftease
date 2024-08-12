export interface MonthData {
  days: DateTag[];
  monthName: string;
  month: number;
  year: number;
}

export interface DateTag {
  numberOfTheDay: string;
  dayOfTheWeek: string;
  numberOfTheMonth: string;
  numberOfTheYear: string;
}
