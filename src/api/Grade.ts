import { AuthInstance, BaseInstance } from './Base';
import { Grade } from '~/model/Grade';

export const getAllGrades = async (): Promise<Grade[]> => {
  const grades = await BaseInstance.get<Grade[]>('/grades');
  return grades.data;
};

export const getGradesByStudentId = async (
  studentId: number
): Promise<Grade[]> => {
  const grades = await BaseInstance.get<Grade[]>(
    `students/${studentId}/grades`
  );
  return grades.data;
};

export const getGradesByAuthenticatedUser = async (
  token: string
): Promise<Grade[]> => {
  const grades = await AuthInstance(token).get<Grade[]>('me/grades');
  return grades.data;
};

export const getGradesByNim = async (nim: string): Promise<Grade[]> => {
  const grades = await BaseInstance.get<Grade[]>(
    `students/nim/${nim}/grades`
  );
  return grades.data;
}

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
