export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: 'Doctor' | 'Admin' | 'Accountant';
  status: 'Active' | 'InActive';
};
