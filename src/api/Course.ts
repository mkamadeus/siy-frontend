import { Course } from '~/model/Course';
import { BaseInstance } from './Base';

export const getAllCourses = async (): Promise<Course[]> => {
  const courses = await BaseInstance.get<Course[]>('/courses');
  return courses.data;
};

export const getCourseById = async (id: number): Promise<Course> => {
  const courses = await BaseInstance.get<Course>(`/courses/${id}`);
  return courses.data;
};

export const createCourse = async (courseData: Course): Promise<Course> => {
  const course = await BaseInstance.post<Course>('/courses', courseData);
  return course.data;
};

export const updateCourse = async (
  id: number,
  courseData: Partial<Course>
): Promise<Course> => {
  const course = await BaseInstance.put<Course>(`/courses/${id}`, courseData);
  return course.data;
};

export const deleteCourse = async (id: number): Promise<void> => {
  await BaseInstance.delete<Course>(`/courses/${id}`);
};
