import axios from 'axios';
import { symlinkSync } from 'fs';
// import { env } from '~/env';
import { CourseGrade } from '~/model/Grade';
import { Student } from '~/model/Student';
import { dummyRequest } from './Dummy';

export const getStudentData = async (): Promise<Student> => {
  //   `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/grades/13518035/2020/1`
  // );
  // const res = await axios.get<Student>(
  //   `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/grades/13518035`
  // );
  // return res.data;
  return await dummyRequest<Student>({
    id: 1,
    nim: '13518035',
    ipk: 1.23,
    name: 'Matthew Kevin Amadeus',
    imgPath:
      'https://gitlab.informatika.org/uploads/-/system/user/avatar/1646/avatar.png?width=90',
    loAverage: 1.23,
    courses: [
      {
        code: 'MS0001',
        name: 'Mata Kuliah 1',
        id: 1,
        sks: 2,
        silabusRingkas: 'lorem',
        silabusLengkap: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0002',
        name: 'Mata Kuliah 2',
        id: 2,
        sks: 2,
        silabusRingkas: 'lorem',
        silabusLengkap: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0003',
        name: 'Mata Kuliah 3',
        id: 3,
        sks: 4,
        silabusRingkas: 'lorem',
        silabusLengkap: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0004',
        name: 'Mata Kuliah 4',
        id: 4,
        sks: 2,
        silabusRingkas: 'lorem',
        silabusLengkap: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0005',
        name: 'Mata Kuliah 5',
        id: 5,
        sks: 3,
        silabusRingkas: 'lorem',
        silabusLengkap: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0006',
        name: 'Mata Kuliah 6',
        id: 6,
        sks: 2,
        silabusRingkas: 'lorem',
        silabusLengkap: 'lorem ipsum',
        outcome: '',
      },
    ],
    studentGrades: [
      {
        id: 1,
        studentId: 1,
        courseId: 1,
        year: 2020,
        semester: 1,
        indeks: CourseGrade.A,
        course: {
          code: 'MS0001',
          name: 'Mata Kuliah 1',
          id: 1,
          sks: 2,
          silabusRingkas: 'lorem',
          silabusLengkap: 'lorem ipsum',
          outcome: '',
        },
      },
      {
        id: 2,
        studentId: 1,
        courseId: 2,
        year: 2020,
        semester: 1,
        indeks: CourseGrade.B,
        course: {
          code: 'MS0002',
          name: 'Mata Kuliah 2',
          id: 1,
          sks: 2,
          silabusRingkas: 'lorem',
          silabusLengkap: 'lorem ipsum',
          outcome: '',
        },
      },
      {
        id: 2,
        studentId: 1,
        courseId: 2,
        year: 2020,
        semester: 1,
        indeks: CourseGrade.B,
        course: {
          code: 'MS0002',
          name: 'Mata Kuliah 2',
          id: 2,
          sks: 2,
          silabusRingkas: 'lorem',
          silabusLengkap: 'lorem ipsum',
          outcome: '',
        },
      },
      {
        id: 3,
        studentId: 1,
        courseId: 3,
        year: 2020,
        semester: 1,
        indeks: CourseGrade.AB,
        course: {
          code: 'MS0003',
          name: 'Mata Kuliah 3',
          id: 3,
          sks: 2,
          silabusRingkas: 'lorem',
          silabusLengkap: 'lorem ipsum',
          outcome: '',
        },
      },
      {
        id: 4,
        studentId: 1,
        courseId: 4,
        year: 2020,
        semester: 1,
        indeks: CourseGrade.A,
        course: {
          code: 'MS0004',
          name: 'Mata Kuliah 4',
          id: 4,
          sks: 2,
          silabusRingkas: 'lorem',
          silabusLengkap: 'lorem ipsum',
          outcome: '',
        },
      },
      {
        id: 5,
        studentId: 1,
        courseId: 5,
        year: 2020,
        semester: 1,
        indeks: CourseGrade.A,
        course: {
          code: 'MS0005',
          name: 'Mata Kuliah 5',
          id: 5,
          sks: 2,
          silabusRingkas: 'lorem',
          silabusLengkap: 'lorem ipsum',
          outcome: '',
        },
      },
      {
        id: 6,
        studentId: 1,
        courseId: 6,
        year: 2020,
        semester: 1,
        indeks: CourseGrade.A,
        course: {
          code: 'MS0006',
          name: 'Mata Kuliah 6',
          id: 6,
          sks: 2,
          silabusRingkas: 'lorem',
          silabusLengkap: 'lorem ipsum',
          outcome: '',
        },
      },
    ],
    lo: [
      { loId: 'LO A', loName: 'Penyelesaian Masalah', loScore: 1.23 },
      { loId: 'LO B', loName: 'Desain', loScore: 2.23 },
      { loId: 'LO C', loName: 'Komunikasi', loScore: 3.23 },
      { loId: 'LO D', loName: 'Etika', loScore: 1.33 },
      { loId: 'LO E', loName: 'Kerja Sama', loScore: 3.23 },
      { loId: 'LO F', loName: 'Eksperimen', loScore: 3.56 },
      { loId: 'LO G', loName: 'Belajar Sepanjang Hayat', loScore: 4.0 },
    ],
  });
};

export const getStudentIP = async (): Promise<number> => {
  const res = await axios.get<number>(
    `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/ip/13518035`
  );
  return res.data;
};
