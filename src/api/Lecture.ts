import { Lecture } from '~/model/Lecture';
import { BaseInstance } from './Base';

export const getAllLectures = async (): Promise<Lecture[]> => {
  return [];
};

// TODO: waiting for endpoint
export const getLecturesByTeacherId = async (
  _teacherId: number
): Promise<Lecture[]> => {
  const lectures = (await BaseInstance.get<Lecture[]>('/lectures/year/2020/1'))
    .data;
  return lectures;
};

export const getLectureById = async (id: number): Promise<Lecture> => {
  const lecture = (await BaseInstance.get<Lecture>(`/lectures/${id}`)).data;
  return lecture;
};

// TODO: implementation
export const createLecture = async (lecture: Lecture): Promise<void> => {
  return;
};
