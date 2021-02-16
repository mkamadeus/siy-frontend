import { CourseGrade } from '~/model/Course';
import { Student } from '~/model/Student';
import { dummyRequest } from './Dummy';

export const getStudentData = async (): Promise<Student> => {
  return await dummyRequest<Student>({
    nim: '13518035',
    ipk: 1.23,
    name: 'Matthew Kevin Amadeus',
    imgPath:
      'https://gitlab.informatika.org/uploads/-/system/user/avatar/1646/avatar.png?width=90',
    loAverage: 1.23,
    courses: [
      {
        code: 'IF3210',
        name: 'Pengembangan Aplikasi pada Platform Khusus',
      },
      {
        code: 'IF3230',
        name: 'Sistem Paralel dan Terdistribusi',
      },
      {
        code: 'IF3250',
        name: 'Proyek Perangkat Lunak',
      },
      {
        code: 'IF3260',
        name: 'Grafika Komputer',
      },
      {
        code: 'IF3270',
        name: 'Pembelajaran Mesin',
      },
      {
        code: 'IF3280',
        name: 'Socio-informatika dan Profesionalisme',
      },
    ],
    transcript: [
      {
        year: 2020,
        semester: 1,
        ip: 1.23,
        courses: [
          {
            code: 'IF3110',
            name: 'Pengembangan Aplikasi Berbasis Web',
            grade: CourseGrade.A,
          },
          {
            code: 'IF3130',
            name: 'Jaringan Komputer',
            grade: CourseGrade.BC,
          },
          {
            code: 'IF3140',
            name: 'Manajemen Basis Data',
            grade: CourseGrade.T,
          },
          {
            code: 'IF3141',
            name: 'Sistem Informasi',
            grade: CourseGrade.C,
          },
          {
            code: 'IF3150',
            name: 'Manajemen Proyek Perangkat Lunak',
            grade: CourseGrade.AB,
          },
          {
            code: 'IF3151',
            name: 'Interaksi Manusia Komputer',
            grade: CourseGrade.D,
          },
          {
            code: 'IF3170',
            name: 'Inteligensi Buatan',
            grade: CourseGrade.E,
          },
        ],
      },
      {
        year: 2020,
        semester: 2,
        ip: 1.23,
        courses: [
          {
            code: 'IF3210',
            name: 'Pengembangan Aplikasi pada Platform Khusus',
          },
          {
            code: 'IF3230',
            name: 'Sistem Paralel dan Terdistribusi',
          },
          {
            code: 'IF3250',
            name: 'Proyek Perangkat Lunak',
          },
          {
            code: 'IF3260',
            name: 'Grafika Komputer',
          },
          {
            code: 'IF3270',
            name: 'Pembelajaran Mesin',
          },
          {
            code: 'IF3280',
            name: 'Socio-informatika dan Profesionalisme',
          },
        ],
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
