import { Course } from '~/model/Course';
import { BaseInstance } from './Base';

export const getAllCourses = async (): Promise<Course[]> => {
  const courses = await BaseInstance.get<Course[]>('/courses');
  return courses.data;
};

export const createCourse = async (courseData: Course): Promise<Course> => {
  const course = await BaseInstance.post<Course>('/courses', courseData);
  return course.data;
};
