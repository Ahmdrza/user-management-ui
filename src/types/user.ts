import { Role } from './role';
import { Status } from './status';

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: Role;
  status: Status;
};
