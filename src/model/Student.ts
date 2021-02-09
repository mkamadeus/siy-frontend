import { Course } from './Course';

export interface StudentBase {
  nim: string;
  name: string;
  imgPath: string;
  ipk: number;
}

export interface Student extends StudentBase {
  courses: Course[];
}
