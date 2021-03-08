export interface Course {
  id: number;
  code: string;
  name: string;
  sks: number;
  silabusRingkas: string;
  silabusLengkap: string;
  outcome: string;
  // lo?: LearningOutcome[];
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
