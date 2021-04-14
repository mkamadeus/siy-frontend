export interface StudentGrade {
  id: number;
  studentId: number;
  lectureId: number;
  year: number;
  semester: number;
  index: CourseGrade;
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
