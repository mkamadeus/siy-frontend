import { LectureHistory } from '~/model/LectureHistory';
import { SessionData } from '~/model/Session';
import { TeachingHistory } from '~/model/TeachingHistory';
import { AuthInstance } from './Base';

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
