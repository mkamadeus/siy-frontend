import { BaseInstance } from './Base';

export const getCourseAssessment = async (
  lectureId: number
): Promise<number> => {
  const ca = await BaseInstance.get<number>(
    `/lectures/${lectureId}/course-assessment`
  );
  return ca.data;
};
