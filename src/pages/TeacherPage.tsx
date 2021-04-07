import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import LOInput from '../components/page/LOInput'
import { getCourseData } from '~/api/Teacher';
import { useQuery } from 'react-query';
import LoadingPage from './common/LoadingPage';

function isLOValid(title: string, LOList: string[]) : boolean {
  var value = 0;

  LOList.forEach(lo => {
    var elmt = document.getElementById(title + '-' + lo);
    if (elmt && elmt instanceof HTMLInputElement && elmt.value !== "") {
      value += parseFloat(elmt.value);
    }
  });

  return value === 0 || value === 1;
}

function isAllLOValid() : boolean {
  const LOlist = ['LO-A', 'LO-B', 'LO-C', 'LO-D', 'LO-E', 'LO-F', 'LO-G'];
  const titleList = ['UAS', 'UTS', 'Praktikum', 'Kuis', 'Latihan'];

  var LOValid = true;
  titleList.forEach(title => {
    LOValid = LOValid && isLOValid(title, LOlist);
  });

  return LOValid;
}


const TeacherPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('courseData', getCourseData);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values : any) => {
    if (isAllLOValid()) {
      alert("Input berhasil disimpan");
      // TODO : POST form
    }
    else {
      alert("Input LO masih belum benar");
    }
  };

  if (error) {
    alert(error);
  }

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container p-3">Kode Mata Kuliah
            <span className="text-red-500"> required</span>
          </div>
          <select
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            name="teacher"
            ref={register({
              required: 'Required',
            })}
          >
            <option label=" "></option>
            {data.map((d) => (
              <option key={d.code}>{d.code}</option>
            ))}
          </select>
          
          <div className="container p-3">
            Semester
            <span className="text-red-500"> required</span>
          </div>
          <select
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            name="semester"
            ref={register({
              required: 'Required',
            })}
          >
            <option label=" "></option>
            <option>1</option>
            <option>2</option>
          </select>
          
          <div className="container p-3">
            Tahun (Format: Jika tahun ajar 2020/2021 tuliskan 2020)
            <span className="text-red-500"> required</span>
          </div>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
            name="year"
            pattern="20\d{2}"
            placeholder="ex. 2020"
            ref={register({
              required: 'Required',
            })}
          ></input>
          
          <div className="container p-3">
            <div>Upload File Rekap Nilai (.csv, .xls, .xlsx)</div>
            <input
              className="container p-3"
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              name="gradeFile"
            ></input>
          </div>
          
          <div className="container p-3">
              Portofolio Dosen (Format: Tuliskan hingga 2 angka di belakang koma)
          </div>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
            placeholder="ex. 0.93"
            pattern="^\d\.\d{0,2}$"
          ></input>

          <div className="container p-3">
            Upload Bobot setiap LO (Format: Tuliskan hingga 2 angka di belakang koma)
          </div>
          <LOInput title="UAS"></LOInput>
          <LOInput title="UTS"></LOInput>
          <LOInput title="Praktikum"></LOInput>
          <LOInput title="Kuis"></LOInput>
          <LOInput title="Latihan"></LOInput>
          <Button
            type="submit"
          >Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default TeacherPage;
