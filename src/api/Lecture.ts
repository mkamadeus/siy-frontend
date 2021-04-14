import { Lecture } from '~/model/Lecture';
import { BaseInstance } from './Base';

export const getAllLectures = async (): Promise<Lecture[]> => {
  const lectures = await BaseInstance.get<Lecture[]>('/lectures');
  return lectures.data;
};

export const getLectureById = async (id: number): Promise<Lecture> => {
  const lecture = await BaseInstance.get<Lecture>(`/lectures/${id}`);
  return lecture.data;
};

export const getLectureByYearSemester = async (
  year: number,
  semester: number
): Promise<Lecture[]> => {
  const lectures = await BaseInstance.get<Lecture[]>(
    `/lectures/year/${year}/${semester}`
  );
  return lectures.data;
};

export const createLecture = async (lectureData: Lecture): Promise<Lecture> => {
  const lecture = await BaseInstance.post<Lecture>('/lectures', lectureData);
  return lecture.data;
};
// TODO: waiting for endpoint
export const getLecturesByTeacherId = async (
  _teacherId: number
): Promise<Lecture[]> => {
  const lectures = (await BaseInstance.get<Lecture[]>('/lectures/year/2020/1'))
    .data;
  return lectures;
};

export const updateLecture = async (
  id: number,
  lectureData: Partial<Lecture>
): Promise<Lecture> => {
  const lecture = await BaseInstance.put<Lecture>(
    `/lectures/${id}`,
    lectureData
  );
  return lecture.data;
};
