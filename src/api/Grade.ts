import { StudentGrade } from '~/model/Grade';
import { BaseInstance } from './Base';

export const getAllGrades = async (): Promise<StudentGrade[]> => {
  const grades = await BaseInstance.get<StudentGrade[]>('/grades');
  return grades.data;
};

export const getGradesByNim = async (nim: string): Promise<StudentGrade[]> => {
  const grades = await BaseInstance.get<StudentGrade[]>(
    `/grades/student/${nim}`
  );
  return grades.data;
};
