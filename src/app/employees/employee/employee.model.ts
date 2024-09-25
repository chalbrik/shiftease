export interface Employee {
  id: number;
  name: string;
  last_name: string;
  phone_number: string;
  email_address: string;
  start_hire_date: string;
  end_hire_date: string;
  contract_type: string;
}

export interface NewEmployeeData {
  name: string;
  last_name: string;
  phone_number: string;
  email_address: string;
  start_hire_date: string;
  end_hire_date: string;
  contract_type: string;
}

export interface ContractTypes {
  contractType: string;
  viewContractType: string;
}
