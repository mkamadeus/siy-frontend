import {Course} from '~/model/Course';

export interface Teacher {
  id: number;
  name: string;
  teaches: Course[];
}
