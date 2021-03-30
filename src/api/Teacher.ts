import axios from 'axios';
// import { env } from '~/env';
// import { CourseGrade } from '~/model/Course';
import { Course } from '~/model/Course';
import { dummyRequest } from './Dummy';

export const getCourseData = async (): Promise<Course[]> => {
  //   `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/grades/13518035/2020/1`
  // );
  // const res = await axios.get<Course[]>(
  //  `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/courses/`
  // );
  // return res.data;

  return await dummyRequest<Course[]> ([
    {
      id: 1,
      code: 'MS0001',
      name: 'Mata Kuliah 1',
      sks: 2,
      silabusRingkas: 'lorem',
      silabusLengkap: 'lorem ipsum',
      outcome: '',
    },
    {
      id: 2,
      code: 'MS0002',
      name: 'Mata Kuliah 2',
      sks: 2,
      silabusRingkas: 'lorem',
      silabusLengkap: 'lorem ipsum',
      outcome: '',
    },
    {
      id: 3,
      code: 'MS0003',
      name: 'Mata Kuliah 3',
      sks: 4,
      silabusRingkas: 'lorem',
      silabusLengkap: 'lorem ipsum',
      outcome: '',
    },
    {
      id: 4,
      code: 'MS0004',
      name: 'Mata Kuliah 4',
      sks: 2,
      silabusRingkas: 'lorem',
      silabusLengkap: 'lorem ipsum',
      outcome: '',
    },
    {
      id: 5,
      code: 'MS0005',
      name: 'Mata Kuliah 5',
      sks: 3,
      silabusRingkas: 'lorem',
      silabusLengkap: 'lorem ipsum',
      outcome: '',
    },
    {
      id: 6,
      code: 'MS0006',
      name: 'Mata Kuliah 6',
      sks: 2,
      silabusRingkas: 'lorem',
      silabusLengkap: 'lorem ipsum',
      outcome: '',
    }
  ]);
};

//export const postForm = async () => {
  //   `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/grades/13518035/2020/1`
  // );
  //   const res = await axios.get<Course[]>(
  //     `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/courses`
  //   );
  //   return res.data;
//};
