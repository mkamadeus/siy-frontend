import axios from 'axios';
// import { env } from '~/env';
// import { CourseGrade } from '~/model/Course';
import { Teacher } from '~/model/Teacher';
// import { dummyRequest } from './Dummy';
import { BaseInstance } from './Base';
import { Course } from '~/model/Course';

export const getCourseData = async (): Promise<Course[]> => {
  const courses = await BaseInstance.get<Course[]>(`/courses/`);
  return courses.data;
};

export const postForm = async () => {
};
export const getTeacherById = async (id: number): Promise<Teacher> => {
  const teachers = await BaseInstance.get<Teacher>(`/teacher/${id}`);
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
  const teachers = await BaseInstance.put<Teacher>(`/teachers/${id}`, teacherData);
  return teachers.data;
};