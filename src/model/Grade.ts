import { Course } from './Course';

export interface StudentGrade {
  id: number;
  studentId: number;
  courseId: number;
  year: number;
  semester: number;
  indeks: CourseGrade;
  course: Course;
  ip: number;
}

export enum CourseGrade {
  A = 'A',
  AB = 'AB',
  B = 'B',
  BC = 'BC',
  C = 'C',
  D = 'D',
  E = 'E',
  T = 'T',
}
