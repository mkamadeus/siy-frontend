export interface Lecture {
  id: number;
  courseId: number;
  semester: number;
  year: number;
  loKmtWeight: number[];
  loFinalTestWeight: number[];
  loMidTestWeight: number[];
  loHomeworkWeight: number[];
  loQuizWeight: number[];
  loPracticumWeight: number[];
  createdAt: Date;
  updatedAt: Date;
}
