import { Course } from './Course';
import { LearningOutcome } from './LearningOutcome';
import { StudentGrade } from './Grade';

export interface StudentBase {
  id: number;
  nim: string;
  name: string;
  imgPath: string;
  ipk: number;
}

export interface Student {
  id: number;
  nim: string;
  name: string;
  imgPath: string;
  ipk: number;
  courses: Course[];
  studentGrades: StudentGrade[];
  lo: LearningOutcome[];
}
