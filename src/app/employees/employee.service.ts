import { Injectable } from '@angular/core';
import { Employee } from './employee/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees = [
    {
      id: 1,
      name: 'Jacek',
      last_name: 'Brzozowski',
      phone_number: '444-222-333',
      email_address: 'jacekbrzozowski@gmail.com',
      start_hire_date: '2023-04-22',
      end_hire_date: '2024-04-22',
      contract_type: 'UZ',
    },
    {
      id: 2,
      name: 'Monika',
      last_name: 'Jankowska',
      phone_number: '421-123-321',
      email_address: 'monikajankowska@gmail.com',
      start_hire_date: '2023-04-22',
      end_hire_date: '2024-04-22',
      contract_type: 'UZ',
    },
    {
      id: 3,
      name: 'Marek',
      last_name: 'Bednarek',
      phone_number: '000-212-321',
      email_address: 'marekbednarek@gmail.com',
      employment_period: '2023-04-22',
      start_hire_date: '2023-04-22',
      end_hire_date: '2024-04-22',
      contract_type: 'UZ',
    },
    {
      id: 4,
      name: 'Gabriela',
      last_name: 'Kownacka',
      phone_number: '909-343-333',
      email_address: 'gabrielakownacka@gmail.com',
      start_hire_date: '2023-04-22',
      end_hire_date: '2024-04-22',
      contract_type: 'UZ',
    },
    {
      id: 5,
      name: 'Gabriel',
      last_name: 'Kownacki',
      phone_number: '980-111-355',
      email_address: 'gabrielkownacki@gmail.com',
      start_hire_date: '2023-04-22',
      end_hire_date: '2024-04-22',
      contract_type: 'UZ',
    },
  ];
  constructor() {}

  getEmployees(): Employee[] {
    return this.employees;
  }
}
