export interface Course {
  id: number;
  code: string;
  name: string;
  credits: number;
  briefSyllabus: string;
  completeSyllabus: string;
  outcome: string;
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
