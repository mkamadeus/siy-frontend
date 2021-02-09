import { Student } from '~/model/Student';
import { dummyRequest } from './Dummy';

export const getStudentData = async (): Promise<Student> => {
  return await dummyRequest<Student>({
    nim: '13518035',
    ipk: 1.23,
    name: 'Matthew Kevin Amadeus',
    imgPath:
      'https://cdn.idntimes.com/content-images/community/2020/07/81mx4y9v3cl-sl1500-d6b25ea877f48b4d335694dfaaff435c-f3bf2b1a6a996e30d7c8459a94d91470_600x400.jpg',
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
  });
};
