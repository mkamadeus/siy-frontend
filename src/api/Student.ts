import { Student } from '~/model/Student';
import { BaseInstance } from './Base';

export const getAllStudents = async (): Promise<Student[]> => {
  const students = await BaseInstance.get<Student[]>('/students');
  return students.data;
};

export const getStudentById = async (id: string): Promise<Student> => {
  const students = await BaseInstance.get<Student>(`/students/${id}`);
  return students.data;
};

export const getStudentByNim = async (nim: string): Promise<Student> => {
  const students = await BaseInstance.get<Student>(`/students/nim/${nim}`);
  return students.data;
};

export const createStudent = async (studentData: Student): Promise<Student> => {
  const students = await BaseInstance.post<Student>('/courses', studentData);
  return students.data;
};

export const updateStudent = async (
  id: number,
  studentData: Partial<Student>
): Promise<Student> => {
  const students = await BaseInstance.put<Student>(
    `/courses/${id}`,
    studentData
  );
  return students.data;
};
