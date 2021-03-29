import axios from 'axios';
// import { env } from '~/env';
// import { CourseGrade } from '~/model/Course';
import { Course } from '~/model/Course';
// import { dummyRequest } from './Dummy';

export const getCourseData = async (): Promise<Course[]> => {
  //   `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/grades/13518035/2020/1`
  // );
  const res = await axios.get<Course[]>(
    `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/courses/`
  );
  return res.data;
};

//export const postForm = async () => {
  //   `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/grades/13518035/2020/1`
  // );
  //   const res = await axios.get<Course[]>(
  //     `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/courses`
  //   );
  //   return res.data;
//};
