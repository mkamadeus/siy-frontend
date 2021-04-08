import axios from 'axios';
import { Teacher } from '~/model/Teacher';
import { BaseInstance } from './Base';

export const getTeacherData = async (): Promise<Teacher[]> => {
  const res = await axios.get<Teacher[]>(
    `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/teachers`
  );
  return res.data;
};

export const getTeacherById = async (id: number): Promise<Teacher> => {
  const teachers = await BaseInstance.get<Teacher>(`/teachers/${id}`);
  return teachers.data;
};

export const createTeacher = async (teacherData: Teacher): Promise<Teacher> => {
  const teachers = await BaseInstance.post<Teacher>('/teachers', teacherData);
  return teachers.data;
};

export const updateTeacher = async (
  id: number,
  teacherData: Partial<Teacher>
): Promise<Teacher> => {
  const teachers = await BaseInstance.put<Teacher>(
    `/teachers/${id}`,
    teacherData
  );
  return teachers.data;
};
