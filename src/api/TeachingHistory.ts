import { TeachingHistory } from '~/model/TeachingHistory';
import { BaseInstance } from './Base';

export const getTeachingHistoriesByTeacherId = async (
  id: number
): Promise<TeachingHistory[]> => {
  const teachingHistories = await BaseInstance.get<TeachingHistory[]>(
    `/teaching-history/teacher/${id}`
  );

  return teachingHistories.data;
};

export const getTeachingHistoriesByLectureId = async (
  id: number
): Promise<TeachingHistory[]> => {
  const teachingHistories = await BaseInstance.get<TeachingHistory[]>(
    `/teaching-history/lectures/${id}`
  );

  return teachingHistories.data;
};

export const updatePorto = async (
  lectureId: number,
  teacherId: number,
  data: Partial<TeachingHistory>
): Promise<TeachingHistory> => {
  const teachingHistory = await BaseInstance.put<TeachingHistory>(
    `/teaching-history/portofolio/${lectureId}/${teacherId}`,
    data
  );

  return teachingHistory.data;
};
