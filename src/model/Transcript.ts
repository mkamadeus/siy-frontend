import { Course } from './Course';

export interface Transcript {
  year: number;
  semester: number;
  courses: Course[];
  ip: number;
}
