import { Grade } from './Grade';
import { Lecture } from './Lecture';
import { Student } from './Student';

export interface LectureHistory {
  studentId: number;
  lectureId: number;
  gradeId: number;
  attendance: number;
  lecture: Lecture;
  student: Student;
  grade: Grade;
}