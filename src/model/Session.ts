import { Student } from './Student';
import { Teacher } from './Teacher';
import { UserRole } from './User';

export interface SessionData {
  role: UserRole;
  userData: Student | Teacher | null;
}
