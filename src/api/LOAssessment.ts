import { AuthInstance } from './Base';

export const getLoAssessment = async (
  token: string,
  year: string,
  semester: string
) => {
  const outcomes = await AuthInstance(token).get(
    `/learning-outcomes/${year}/${semester}`
  );
  return outcomes;
};
