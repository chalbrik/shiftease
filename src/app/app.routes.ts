import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeesDataComponent } from './employees-data/employees-data.component';

export const routes: Routes = [
  {
    path: 'grafik',
    component: ScheduleComponent,
    title: 'Home Page',
  },
  {
    path: 'pracownicy',
    component: EmployeesDataComponent,
    title: 'Pracownicy',
  },
];
