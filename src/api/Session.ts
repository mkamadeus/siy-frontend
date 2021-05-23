import { Grade } from '~/model/Grade';
import { LectureHistory } from '~/model/LectureHistory';
import { SessionData } from '~/model/Session';
import { Student } from '~/model/Student';
import { TeachingHistory } from '~/model/TeachingHistory';
import { AuthInstance } from './Base';

export const getStudentDataBySession = async (
  token: string
): Promise<Student> => {
  const student = await AuthInstance(token).get<Student>('/session/student');
  return student.data;
};

export const getStudentGradesBySession = async (
  token: string
): Promise<Grade[]> => {
  const grades = await AuthInstance(token).get<Grade[]>(
    '/session/student/grades'
  );
  return grades.data;
};

export const getAuthenticatedUserData = async (
  token: string
): Promise<SessionData> => {
  const user = await AuthInstance(token).get<SessionData>('/me');
  return user.data;
};

export const getAuthenticatedLectureHistory = async (
  token: string
): Promise<LectureHistory[]> => {
  const user = await AuthInstance(token).get<LectureHistory[]>(
    '/me/lecture-histories'
  );
  return user.data;
};

export const getAuthenticatedTeachingHistory = async (
  token: string
): Promise<TeachingHistory[]> => {
  const user = await AuthInstance(token).get<TeachingHistory[]>(
    '/me/teaching-histories'
  );
  return user.data;
};
