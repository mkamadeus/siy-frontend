import { AuthInstance } from './Base';

export const getLoAssessment = async (
  token: string,
  year: number,
  semester: number
): Promise<number[]> => {
  const outcomes = await AuthInstance(token).get<number[]>(
    `lectures/learning-outcomes/${year}/${semester}`
  );
  return outcomes.data;
};
