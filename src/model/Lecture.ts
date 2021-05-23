export interface Lecture {
  id: number;
  courseId: number;
  semester: number;
  year: number;
  loFinalTestWeight: number[];
  loMidTestWeight: number[];
  loHomeworkWeight: number[];
  loQuizWeight: number[];
  loPracticumWeight: number[];
}
