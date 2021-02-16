import { LearningOutcome } from './LearningOutcome';

export interface Course {
  code: string;
  name: string;
  grade?: CourseGrade;
  lo?: LearningOutcome[];
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
