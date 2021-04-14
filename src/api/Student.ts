import { CourseGrade } from '~/model/Grade';
import { Student } from '~/model/Student';
import { dummyRequest } from './Dummy';
import { BaseInstance } from './Base';

export const getStudentData = async (): Promise<Student> => {
  return await dummyRequest<Student>({
    id: 1,
    nim: '13518035',
    ipk: 1.23,
    name: 'Matthew Kevin Amadeus',
    imgPath:
      'https://gitlab.informatika.org/uploads/-/system/user/avatar/1646/avatar.png?width=90',
    courses: [
      {
        code: 'MS0001',
        name: 'Mata Kuliah 1',
        id: 1,
        credits: 2,
        briefSyllabus: 'lorem',
        completeSyllabus: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0002',
        name: 'Mata Kuliah 2',
        id: 2,
        credits: 2,
        briefSyllabus: 'lorem',
        completeSyllabus: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0003',
        name: 'Mata Kuliah 3',
        id: 3,
        credits: 4,
        briefSyllabus: 'lorem',
        completeSyllabus: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0004',
        name: 'Mata Kuliah 4',
        id: 4,
        credits: 2,
        briefSyllabus: 'lorem',
        completeSyllabus: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0005',
        name: 'Mata Kuliah 5',
        id: 5,
        credits: 3,
        briefSyllabus: 'lorem',
        completeSyllabus: 'lorem ipsum',
        outcome: '',
      },
      {
        code: 'MS0006',
        name: 'Mata Kuliah 6',
        id: 6,
        credits: 2,
        briefSyllabus: 'lorem',
        completeSyllabus: 'lorem ipsum',
        outcome: '',
      },
    ],
    studentGrades: [
      {
        id: 1,
        studentId: 1,
        courseId: 1,
        year: 2022,
        semester: 1,
        indeks: CourseGrade.A,
        course: {
          code: 'MS0001',
          name: 'Mata Kuliah 1',
          id: 1,
          credits: 2,
          briefSyllabus: 'lorem',
          completeSyllabus: 'lorem ipsum',
          outcome: '',
        },
        loA: {
          loId: 'LO A',
          loName: 'Penyelesaian Masalah',
          loScore: 0.0,
        },
        loB: {
          loId: 'LO B',
          loName: 'Desain',
          loScore: 2.23,
        },
        loC: {
          loId: 'LO C',
          loName: 'Komunikasi',
          loScore: 3.23,
        },
        loD: {
          loId: 'LO D',
          loName: 'Etika',
          loScore: 1.33,
        },
        loE: {
          loId: 'LO E',
          loName: 'Kerja Sama',
          loScore: 3.23,
        },
        loF: {
          loId: 'LO F',
          loName: 'Eksperimen',
          loScore: 3.56,
        },
        loG: {
          loId: 'LO G',
          loName: 'Belajar Sepanjang Hayat',
          loScore: 4.0,
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
          credits: 2,
          briefSyllabus: 'lorem',
          completeSyllabus: 'lorem ipsum',
          outcome: '',
        },
        loA: {
          loId: 'LO A',
          loName: 'Penyelesaian Masalah',
          loScore: 1.23,
        },
        loB: {
          loId: 'LO B',
          loName: 'Desain',
          loScore: 0.0,
        },
        loC: {
          loId: 'LO C',
          loName: 'Komunikasi',
          loScore: 3.23,
        },
        loD: {
          loId: 'LO D',
          loName: 'Etika',
          loScore: 1.33,
        },
        loE: {
          loId: 'LO E',
          loName: 'Kerja Sama',
          loScore: 3.23,
        },
        loF: {
          loId: 'LO F',
          loName: 'Eksperimen',
          loScore: 3.56,
        },
        loG: {
          loId: 'LO G',
          loName: 'Belajar Sepanjang Hayat',
          loScore: 4.0,
        },
      },
      {
        id: 2,
        studentId: 1,
        courseId: 2,
        year: 2021,
        semester: 2,
        indeks: CourseGrade.B,
        course: {
          code: 'MS0002',
          name: 'Mata Kuliah 2',
          id: 2,
          credits: 4,
          briefSyllabus: 'lorem',
          completeSyllabus: 'lorem ipsum',
          outcome: '',
        },
        loA: {
          loId: 'LO A',
          loName: 'Penyelesaian Masalah',
          loScore: 1.23,
        },
        loB: {
          loId: 'LO B',
          loName: 'Desain',
          loScore: 2.23,
        },
        loC: {
          loId: 'LO C',
          loName: 'Komunikasi',
          loScore: 0.0,
        },
        loD: {
          loId: 'LO D',
          loName: 'Etika',
          loScore: 1.33,
        },
        loE: {
          loId: 'LO E',
          loName: 'Kerja Sama',
          loScore: 3.23,
        },
        loF: {
          loId: 'LO F',
          loName: 'Eksperimen',
          loScore: 3.56,
        },
        loG: {
          loId: 'LO G',
          loName: 'Belajar Sepanjang Hayat',
          loScore: 4.0,
        },
      },
      {
        id: 3,
        studentId: 1,
        courseId: 3,
        year: 2021,
        semester: 1,
        indeks: CourseGrade.AB,
        course: {
          code: 'MS0003',
          name: 'Mata Kuliah 3',
          id: 3,
          credits: 2,
          briefSyllabus: 'lorem',
          completeSyllabus: 'lorem ipsum',
          outcome: '',
        },
        loA: {
          loId: 'LO A',
          loName: 'Penyelesaian Masalah',
          loScore: 1.23,
        },
        loB: {
          loId: 'LO B',
          loName: 'Desain',
          loScore: 2.23,
        },
        loC: {
          loId: 'LO C',
          loName: 'Komunikasi',
          loScore: 3.23,
        },
        loD: {
          loId: 'LO D',
          loName: 'Etika',
          loScore: 0.0,
        },
        loE: {
          loId: 'LO E',
          loName: 'Kerja Sama',
          loScore: 3.23,
        },
        loF: {
          loId: 'LO F',
          loName: 'Eksperimen',
          loScore: 3.56,
        },
        loG: {
          loId: 'LO G',
          loName: 'Belajar Sepanjang Hayat',
          loScore: 4.0,
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
          credits: 3,
          briefSyllabus: 'lorem',
          completeSyllabus: 'lorem ipsum',
          outcome: '',
        },
        loA: {
          loId: 'LO A',
          loName: 'Penyelesaian Masalah',
          loScore: 1.23,
        },
        loB: {
          loId: 'LO B',
          loName: 'Desain',
          loScore: 2.23,
        },
        loC: {
          loId: 'LO C',
          loName: 'Komunikasi',
          loScore: 3.23,
        },
        loD: {
          loId: 'LO D',
          loName: 'Etika',
          loScore: 1.33,
        },
        loE: {
          loId: 'LO E',
          loName: 'Kerja Sama',
          loScore: 0.0,
        },
        loF: {
          loId: 'LO F',
          loName: 'Eksperimen',
          loScore: 3.56,
        },
        loG: {
          loId: 'LO G',
          loName: 'Belajar Sepanjang Hayat',
          loScore: 4.0,
        },
      },
      {
        id: 5,
        studentId: 1,
        courseId: 5,
        year: 2020,
        semester: 2,
        indeks: CourseGrade.A,
        course: {
          code: 'MS0005',
          name: 'Mata Kuliah 5',
          id: 5,
          credits: 2,
          briefSyllabus: 'lorem',
          completeSyllabus: 'lorem ipsum',
          outcome: '',
        },
        loA: {
          loId: 'LO A',
          loName: 'Penyelesaian Masalah',
          loScore: 1.23,
        },
        loB: {
          loId: 'LO B',
          loName: 'Desain',
          loScore: 2.23,
        },
        loC: {
          loId: 'LO C',
          loName: 'Komunikasi',
          loScore: 3.23,
        },
        loD: {
          loId: 'LO D',
          loName: 'Etika',
          loScore: 1.33,
        },
        loE: {
          loId: 'LO E',
          loName: 'Kerja Sama',
          loScore: 3.23,
        },
        loF: {
          loId: 'LO F',
          loName: 'Eksperimen',
          loScore: 0.0,
        },
        loG: {
          loId: 'LO G',
          loName: 'Belajar Sepanjang Hayat',
          loScore: 4.0,
        },
      },
      {
        id: 6,
        studentId: 1,
        courseId: 6,
        year: 2021,
        semester: 2,
        indeks: CourseGrade.A,
        course: {
          code: 'MS0006',
          name: 'Mata Kuliah 6',
          id: 6,
          credits: 2,
          briefSyllabus: 'lorem',
          completeSyllabus: 'lorem ipsum',
          outcome: '',
        },
        loA: {
          loId: 'LO A',
          loName: 'Penyelesaian Masalah',
          loScore: 1.23,
        },
        loB: {
          loId: 'LO B',
          loName: 'Desain',
          loScore: 2.23,
        },
        loC: {
          loId: 'LO C',
          loName: 'Komunikasi',
          loScore: 3.23,
        },
        loD: {
          loId: 'LO D',
          loName: 'Etika',
          loScore: 1.33,
        },
        loE: {
          loId: 'LO E',
          loName: 'Kerja Sama',
          loScore: 3.23,
        },
        loF: {
          loId: 'LO F',
          loName: 'Eksperimen',
          loScore: 3.56,
        },
        loG: {
          loId: 'LO G',
          loName: 'Belajar Sepanjang Hayat',
          loScore: 0.0,
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

// export const getStudentIP = async (): Promise<number> => {
//   const res = await axios.get<number>(
//     `${import.meta.env.SNOWPACK_PUBLIC_API_URL}/students/ip/13518035`
//   );
//   return res.data;
// };
export const getAllStudents = async (): Promise<Student[]> => {
  const students = await BaseInstance.get<Student[]>('/students');
  return students.data;
};
export const getStudentById = async (id: number): Promise<Student> => {
  const students = await BaseInstance.get<Student>(`/student/${id}`);
  return students.data;
};

export const createStudent = async (studentData: Student): Promise<Student> => {
  const students = await BaseInstance.post<Student>('/courses', studentData);
  return students.data;
};

export const updateStudent = async (
  id: number,
  studentData: Partial<Student>
): Promise<Student> => {
  const students = await BaseInstance.put<Student>(`/courses/${id}`, studentData);
  return students.data;
};

export const deleteStudent = async (id: number): Promise<void> => {
  await BaseInstance.delete<Student>(`/student/${id}`);
};
