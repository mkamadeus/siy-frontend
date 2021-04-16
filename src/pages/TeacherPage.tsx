import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import InputLO from '../components/page/LOInput';
import {
  createLecture,
  getLectureByYearSemester,
  updateLecture,
} from '~/api/Lecture';
import { Lecture } from '~/model/Lecture';
import { uploadFile } from '~/api/Grade';

type RouteProps = {
  id: number;
};

const TeacherPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {
  const { register, handleSubmit } = useForm();

  const titleList = ['UAS', 'UTS', 'Praktikum', 'Kuis', 'Latihan'];

  const semesterValue = () => {
    let value = 0;
    const elmt = document.getElementsByName('semester')[0];
    if (elmt instanceof HTMLSelectElement) {
      value = Number(elmt.value);
    }

    return value;
  };

  const yearValue = () => {
    let value = 0;
    const elmt = document.getElementsByName('year')[0];
    if (elmt instanceof HTMLInputElement) {
      value = Number(elmt.value);
    }

    return value;
  };

  const fileValue = () => {
    let file = null;
    const elmt = document.getElementsByName('gradeFile')[0];
    if (elmt instanceof HTMLInputElement) {
      file = elmt.files;
    }

    return file;
  };

  const portofolioValue = () => {
    let value = 0;
    const elmt = document.getElementsByName('portofolio')[0];
    if (elmt instanceof HTMLInputElement) {
      value = Number(elmt.value);
    }

    return value;
  };

  const LOValue = (name: string) => {
    const value: number[] = [];
    const LOList = ['LO-A', 'LO-B', 'LO-C', 'LO-D', 'LO-E', 'LO-F', 'LO-G'];

    LOList.forEach((lo) => {
      const elmt = document.getElementsByName(name + '-' + lo)[0];
      if (elmt instanceof HTMLInputElement) {
        value.push(Number(elmt.value));
      }
    });

    return value;
  };

  const isLectureExist = async (
    courseId: number,
    year: number,
    semester: number
  ) => {
    const lectureArray = await getLectureByYearSemester(year, semester);
    const isExist =
      lectureArray.filter((lecture) => {
        return lecture.courseId == courseId;
      }).length == 1;
    const id = isExist ? lectureArray[0].id : -1;

    return {
      isExist: isExist,
      id: id,
    };
  };

  const isLOValid = (title: string, LOList: string[]) => {
    let value = 0;

    LOList.forEach((lo) => {
      const elmt = document.getElementById(title + '-' + lo);
      if (elmt && elmt instanceof HTMLInputElement && elmt.value !== '')
        value += parseFloat(elmt.value);
    });

    return value === 0 || value === 1;
  };

  const isAllLOValid = () => {
    const LOList = ['LO-A', 'LO-B', 'LO-C', 'LO-D', 'LO-E', 'LO-F', 'LO-G'];
    let LOValid = true;

    titleList.forEach((title) => {
      const elmt = document.getElementsByName(title + 'Checked')[0];
      if (elmt instanceof HTMLInputElement && elmt.checked) {
        LOValid = LOValid && isLOValid(title, LOList);
      }
    });

    return LOValid;
  };

  const isFileValid = () => {
    const elmt = document.getElementById('file-input');
    if (elmt && elmt instanceof HTMLInputElement) {
      if (elmt.value === '') {
        return true;
      } else {
        const splitPath = elmt.value.split('.');
        const format = splitPath[splitPath.length - 1];

        return format === 'csv' || format === 'xls' || format === 'xlsx';
      }
    } else {
      return false;
    }
  };

  const postFile = (courseID: number, year: number, semester: number) => {
    const files = fileValue();

    isLectureExist(courseID, year, semester).then(({ isExist, id }) => {
      if (isExist) {
        if (files) {
          uploadFile(id, year, semester, files[0]);
        }
      }
    });
  };

  const postPortofolio = (courseID: number, year: number, semester: number) => {
    const portofolio = portofolioValue();

    isLectureExist(courseID, year, semester).then(({ isExist, id }) => {
      if (isExist) {
        // TODO : update lecture
        console.log(id);
        console.log(portofolio);
      } else {
        alert('Lecture does\'t exist');
      }
    });
  };

  const postLO = (
    courseID: number,
    year: number,
    semester: number,
    title: string
  ) => {
    const LO = LOValue(title);

    isLectureExist(courseID, year, semester).then(({ isExist, id }) => {
      if (isExist) {
        if (title == 'UAS') {
          updateLecture(id, {
            loAFinalWeight: LO[0],
            loBFinalWeight: LO[1],
            loCFinalWeight: LO[2],
            loDFinalWeight: LO[3],
            loEFinalWeight: LO[4],
            loFFinalWeight: LO[5],
            loGFinalWeight: LO[6],
          } as Lecture);
        } else if (title == 'UTS') {
          updateLecture(id, {
            loAMidWeight: LO[0],
            loBMidWeight: LO[1],
            loCMidWeight: LO[2],
            loDMidWeight: LO[3],
            loEMidWeight: LO[4],
            loFMidWeight: LO[5],
            loGMidWeight: LO[6],
          } as Lecture);
        } else if (title == 'Praktikum') {
          updateLecture(id, {
            loAPracticumWeight: LO[0],
            loBPracticumWeight: LO[1],
            loCPracticumWeight: LO[2],
            loDPracticumWeight: LO[3],
            loEPracticumWeight: LO[4],
            loFPracticumWeight: LO[5],
            loGPracticumWeight: LO[6],
          } as Lecture);
        } else if (title == 'Kuis') {
          updateLecture(id, {
            loAQuizWeight: LO[0],
            loBQuizWeight: LO[1],
            loCQuizWeight: LO[2],
            loDQuizWeight: LO[3],
            loEQuizWeight: LO[4],
            loFQuizWeight: LO[5],
            loGQuizWeight: LO[6],
          } as Lecture);
        } else if (title == 'Latihan') {
          updateLecture(id, {
            loAHomeworkWeight: LO[0],
            loBHomeworkWeight: LO[1],
            loCHomeworkWeight: LO[2],
            loDHomeworkWeight: LO[3],
            loEHomeworkWeight: LO[4],
            loFHomeworkWeight: LO[5],
            loGHomeworkWeight: LO[6],
          } as Lecture);
        }
      } else {
        if (title == 'UAS') {
          createLecture({
            courseId: courseID,
            year: year,
            semester: semester,
            loAFinalWeight: LO[0],
            loBFinalWeight: LO[1],
            loCFinalWeight: LO[2],
            loDFinalWeight: LO[3],
            loEFinalWeight: LO[4],
            loFFinalWeight: LO[5],
            loGFinalWeight: LO[6],
          } as Lecture);
        } else if (title == 'UTS') {
          createLecture({
            courseId: courseID,
            year: year,
            semester: semester,
            loAMidWeight: LO[0],
            loBMidWeight: LO[1],
            loCMidWeight: LO[2],
            loDMidWeight: LO[3],
            loEMidWeight: LO[4],
            loFMidWeight: LO[5],
            loGMidWeight: LO[6],
          } as Lecture);
        } else if (title == 'Praktikum') {
          createLecture({
            courseId: courseID,
            year: year,
            semester: semester,
            loAPracticumWeight: LO[0],
            loBPracticumWeight: LO[1],
            loCPracticumWeight: LO[2],
            loDPracticumWeight: LO[3],
            loEPracticumWeight: LO[4],
            loFPracticumWeight: LO[5],
            loGPracticumWeight: LO[6],
          } as Lecture);
        } else if (title == 'Kuis') {
          createLecture({
            courseId: courseID,
            year: year,
            semester: semester,
            loAQuizWeight: LO[0],
            loBQuizWeight: LO[1],
            loCQuizWeight: LO[2],
            loDQuizWeight: LO[3],
            loEQuizWeight: LO[4],
            loFQuizWeight: LO[5],
            loGQuizWeight: LO[6],
          } as Lecture);
        } else if (title == 'Latihan') {
          createLecture({
            courseId: courseID,
            year: year,
            semester: semester,
            loAHomeworkWeight: LO[0],
            loBHomeworkWeight: LO[1],
            loCHomeworkWeight: LO[2],
            loDHomeworkWeight: LO[3],
            loEHomeworkWeight: LO[4],
            loFHomeworkWeight: LO[5],
            loGHomeworkWeight: LO[6],
          } as Lecture);
        }
      }
    });
  };

  const postKMT = (courseID: number, year: number, semester: number) => {
    const KmtLO = LOValue('KMT');

    isLectureExist(courseID, year, semester).then(({ isExist, id }) => {
      if (isExist) {
        updateLecture(id, {
          loAKMTWeight: KmtLO[0],
          loBKMTWeight: KmtLO[1],
          loCKMTWeight: KmtLO[2],
          loDKMTWeight: KmtLO[3],
          loEKMTWeight: KmtLO[4],
          loFKMTWeight: KmtLO[5],
          loGKMTWeight: KmtLO[6],
        } as Lecture);
      } else {
        createLecture({
          courseId: courseID,
          semester: semester,
          year: year,
          loAKMTWeight: KmtLO[0],
          loBKMTWeight: KmtLO[1],
          loCKMTWeight: KmtLO[2],
          loDKMTWeight: KmtLO[3],
          loEKMTWeight: KmtLO[4],
          loFKMTWeight: KmtLO[5],
          loGKMTWeight: KmtLO[6],
        } as Lecture);
      }
    });
  };

  const onSubmit = (values: unknown) => {
    const LOValid = isAllLOValid();
    const FileValid = isFileValid();

    if (LOValid && FileValid) {
      const courseID = props.id ? props.id : 0;
      console.log(courseID);
      const semester = semesterValue();
      const year = yearValue();

      const fileCheckbox = document.getElementsByName('fileChecked')[0];
      const portoCheckbox = document.getElementsByName('portoChecked')[0];
      const kmtCheckbox = document.getElementsByName('KMTChecked')[0];

      if (fileCheckbox instanceof HTMLInputElement && fileCheckbox.checked) {
        postFile(courseID, year, semester);
      }

      if (portoCheckbox instanceof HTMLInputElement && portoCheckbox.checked) {
        postPortofolio(courseID, year, semester);
      }

      titleList.forEach((title) => {
        const loCheckbox = document.getElementsByName(title + 'Checked')[0];
        if (loCheckbox instanceof HTMLInputElement && loCheckbox.checked) {
          postLO(courseID, year, semester, title);
        }
      });

      if (kmtCheckbox instanceof HTMLInputElement && kmtCheckbox.checked) {
        postKMT(courseID, year, semester);
      }

      alert('Input berhasil disimpan.');
    } else {
      if (!FileValid) alert('Input file masih belum benar.');

      if (!LOValid) alert('Input LO masih belum benar.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <div className="container py-3">
            Semester
            <span className="text-red-500"> required</span>
          </div>
          <select
            className="border-gray-300 rounded-md shadow-sm w-full"
            name="semester"
            ref={register({
              required: 'Required',
            })}
          >
            <option label=" "></option>
            <option>1</option>
            <option>2</option>
          </select>

          <div className="container py-3">
            Tahun (Format: Jika tahun ajaran 2020/2021 tuliskan 2020)
            <span className="text-red-500"> required</span>
          </div>
          <input
            className="border-gray-300 rounded-md shadow-sm w-full"
            type="text"
            name="year"
            pattern="20\d{2}"
            placeholder="ex. 2020"
            ref={register({
              required: 'Required',
            })}
          ></input>

          <div className="container py-3">
            <input className="mr-2" type="checkbox" name="fileChecked"></input>
            <label htmlFor="fileChecked">
              Upload File Rekap Nilai (.csv, .xls, ,xlsx)
            </label>
          </div>
          <input
            id="file-input"
            className="container py-3"
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            name="gradeFile"
            onChange={(e) => {
              console.log(e.target.files);
            }}
          ></input>

          <div className="container py-3">
            <input className="mr-2" type="checkbox" name="portoChecked"></input>
            <label htmlFor="portoChecked">Portofolio Dosen</label>
          </div>
          <input
            className="border-gray-300 rounded-md shadow-sm w-full"
            type="number"
            name="portofolio"
            min="0"
            max="1"
            step="0.01"
          ></input>

          <div className="container py-3">
            Bobot LO dan Kontribusi Mata Kuliah (KMT) terhadap LO (centang
            setiap bagian yang ingin diisi)
          </div>

          {titleList.map((title) => {
            return (
              <InputLO key={title} title={title} min="0" max="1" step="0.01">
                Bobot LO {title}
              </InputLO>
            );
          })}
          <InputLO title="KMT" min="1" max="3" step="1">
            Kontribusi Mata Kuliah terhadap LO
          </InputLO>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default TeacherPage;
