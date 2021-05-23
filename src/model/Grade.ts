export interface Grade {
  id: number;
  grade: number;
  lo: number[];
  quiz: number;
  midTest: number;
  finalTest: number;
  practicum: number;
  homework: number;
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
