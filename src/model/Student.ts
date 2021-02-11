import { Course } from './Course';
import { LearningOutcome } from './LearningOutcome';

export interface StudentBase {
  nim: string;
  name: string;
  imgPath: string;
  ipk: number;
  loAverage: number;
}

export interface Student extends StudentBase {
  courses: Course[];
  lo: LearningOutcome[];
}
