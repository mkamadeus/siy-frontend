import { Course } from '~/model/Course';
import { BaseInstance } from './Base';

export const getAllCourses = async (): Promise<Course[]> => {
  const courses = await BaseInstance.get('/courses');
  return courses.data;
};
