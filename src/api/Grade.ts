import { BaseInstance } from './Base';

export const uploadFile = async (
  lectureId: number,
  year: number,
  semester: number,
  file: File) : Promise<unknown> => {
    const formData = new FormData();
    formData.append('lectureId', lectureId.toString());
    formData.append('year', year.toString());
    formData.append('semester', semester.toString());
    formData.append('file', file);

    const res = await BaseInstance.post<unknown>(
      'grades/upload',
      formData,
      {
        headers: {
          'Content-Type': 'form-data'
        }
      });

    return res.data;
  }
