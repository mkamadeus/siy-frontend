import { Course } from './Course';
import { LearningOutcome } from './LearningOutcome';
import { StudentGrade } from './Grade';

export interface StudentBase {
  id: number;
  nim: string;
  name: string;
  imgPath: string;
  ipk: number;
  loAverage: number;
}

export interface Student extends StudentBase {
  courses: Course[];
  studentGrades: StudentGrade[];
  lo: LearningOutcome[];
}