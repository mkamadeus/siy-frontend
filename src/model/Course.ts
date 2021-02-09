export interface Course {
  code: string;
  name: string;
  grade?: CourseGrade;
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
