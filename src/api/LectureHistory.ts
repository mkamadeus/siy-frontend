import { LectureHistory } from '~/model/LectureHistory';
import { BaseInstance } from './Base'

export const getStudentByLectureId = async (id: number): Promise<LectureHistory[]> => {
  const students = await BaseInstance.get(`/lecture-history/lectures/${id}`);
  return students.data;
}