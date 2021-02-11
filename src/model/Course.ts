import { LearningOutcome } from './LearningOutcome';

export interface Course {
  code: string;
  name: string;
  grade?: CourseGrade;
  lo?: LearningOutcome[];
}

export enum CourseGrade {
  A,
  AB,
  B,
  DC,
  C,
  D,
  E,
  T,
}
