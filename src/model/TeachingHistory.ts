import { Lecture } from './Lecture';
import { Teacher } from './Teacher';

export interface TeachingHistory {
  teacherId: number;
  lectureId: number;
  portfolio?: number;
  teacher: Teacher;
  lecture: Lecture;
}