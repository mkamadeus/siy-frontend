import { Course } from './Course';
import { LearningOutcome } from './LearningOutcome';
import { Transcript } from './Transcript';

export interface StudentBase {
  nim: string;
  name: string;
  imgPath: string;
  ipk: number;
  loAverage: number;
}

export interface Student extends StudentBase {
  courses: Course[];
  transcript: Transcript[];
  lo: LearningOutcome[];
}
