import { CourseAssessment } from '~/model/Assessment';
import { Lecture } from '~/model/Lecture';
import { BaseInstance } from './Base';

export const getAllLectures = async (): Promise<Lecture[]> => {
  const lectures = await BaseInstance.get<Lecture[]>('/lectures');
  return lectures.data;
};

export const getLecturesByTeacherId = async (
  _teacherId: number
): Promise<Lecture[]> => {
  const lectures = (await BaseInstance.get<Lecture[]>('/lectures'));
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
    `/lectures/query?year=${year}&semester=${semester}`
  );
  return lectures.data;
};

export const getCourseAssessmentByLectureId = async(
  year: number,
  semester: number
): Promise<CourseAssessment[]> => {
  const ca = await BaseInstance.get<CourseAssessment[]>(
    `lectures/course-assessment/${year}/${semester}`
  );

  return ca.data;
}

export const createLecture = async (lectureData: Lecture): Promise<Lecture> => {
  const lecture = await BaseInstance.post<Lecture>('/lectures', lectureData);
  return lecture.data;
};

export const updateLecture = async (
  id: number,
  lectureData: Partial<Lecture>
): Promise<Lecture> => {
  const lecture = await BaseInstance.put<Lecture>(
    `/lectures/${id}/`,
    lectureData
  );
  return lecture.data;
};
