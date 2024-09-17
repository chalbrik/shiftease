import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { PlannerComponent } from './planner/planner.component';

import { EmployeesDataComponent } from './employees/employees-data/employees-data.component';

export const routes: Routes = [
  { path: '', redirectTo: '/grafik', pathMatch: 'full' },
  // {
  //   path: 'grafik',
  //   component: ScheduleComponent,
  //   title: 'Home Page',
  // },
  {
    path: 'grafik',
    component: PlannerComponent,
    title: 'Home Page',
  },
  {
    path: 'pracownicy',
    component: EmployeesDataComponent,
    title: 'Pracownicy',
  },
];
