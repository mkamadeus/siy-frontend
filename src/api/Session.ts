import { StudentGrade } from '~/model/Grade';
import { Student } from '~/model/Student';
import { AuthInstance } from './Base';

export const getStudentDataBySession = async (
  token: string
): Promise<Student> => {
  const student = await AuthInstance(token).get<Student>('/session/student');
  return student.data;
};

export const getStudentGradesBySession = async (
  token: string
): Promise<StudentGrade[]> => {
  const grades = await AuthInstance(token).get<StudentGrade[]>(
    '/session/student/grades'
  );
  return grades.data;
};
