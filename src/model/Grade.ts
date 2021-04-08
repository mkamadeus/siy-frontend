import { Course } from './Course';
import { LearningOutcome } from './LearningOutcome';

export interface StudentGrade {
  id: number;
  studentId: number;
  courseId: number;
  year: number;
  semester: number;
  indeks: CourseGrade;
  course: Course;
  //ip: number;
  loA: LearningOutcome;
  loB: LearningOutcome;
  loC: LearningOutcome;
  loD: LearningOutcome;
  loE: LearningOutcome;
  loF: LearningOutcome;
  loG: LearningOutcome;
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
