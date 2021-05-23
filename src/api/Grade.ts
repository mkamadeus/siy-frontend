import { Grade } from '~/model/Grade';
import { BaseInstance } from './Base';

export const getAllGrades = async (): Promise<Grade[]> => {
  const grades = await BaseInstance.get<Grade[]>('/grades');
  return grades.data;
};

export const getGradeById = async (id: number): Promise<Grade> => {
  const grade = await BaseInstance.get<Grade>(`/grades/${id}`);
  return grade.data;
}

export const updateGradeById = async (
  id: number,
  data: Partial<Grade>
): Promise<Grade> => {
  const grade = await BaseInstance.put<Grade>(
    `/grades/${id}`,
    data
  );
  return grade.data;
}

export const uploadFile = async (
  lectureId: number,
  year: number,
  semester: number,
  file: File
): Promise<unknown> => {
  const formData = new FormData();
  formData.append('lectureId', lectureId.toString());
  formData.append('year', year.toString());
  formData.append('semester', semester.toString());
  formData.append('file', file);

  const res = await BaseInstance.post<unknown>('grades/upload', formData, {
    headers: {
      'Content-Type': 'form-data',
    },
  });

  return res.data;
};
