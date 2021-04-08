import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import LOInput from '../components/page/LOInput'
import { getCourseData } from '~/api/Teacher';
import { useQuery } from 'react-query';
import LoadingPage from './common/LoadingPage';


/* LO Validation */
function isLOValid(title: string, LOList: string[]) : boolean {
  var value = 0;

  LOList.forEach(lo => {
    var elmt = document.getElementById(title + '-' + lo);
    if (elmt && elmt instanceof HTMLInputElement && elmt.value !== "") {
      value += parseFloat(elmt.value);
    }
  });

  return value == 0 || value == 1;
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


/* File Validation */
function isFileValid() : boolean {
  var elmt = document.getElementById('file-input');
  
  if (elmt && elmt instanceof HTMLInputElement) {
    // No file attached
    if (elmt.value === "") {
      return true;
    }
    // File attached
    else {
      var splitPath = elmt.value.split('.');
      var format = splitPath[splitPath.length - 1];
      return (format === 'csv' || format === 'xls' || format === 'xlsx');
    }
  }
  else {
    return false;
  }
}

const TeacherPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('courseData', getCourseData);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values : any) => {
    const LoValid = isAllLOValid();
    const fileValid = isFileValid();

    if (LoValid && fileValid) {
      console.log(values);
      alert("Input berhasil disimpan");
      // TODO : POST form
    }
    else {
      if (!fileValid) {
        alert("Input File masih belum valid");
      }
      if (!LoValid) {
        alert("Input LO masih belum valid");
      }
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
        <form 
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="container py-3">Kode Mata Kuliah
            <span className="text-red-500"> required</span>
          </div>
          <select
            className="container p-3 rounded-md border-b bg-gray-200 mb-3"
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
          
          <div className="container py-3">
            Semester
            <span className="text-red-500"> required</span>
          </div>
          <select
            className="container p-3 rounded-md border-b bg-gray-200 mb-3"
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
            Tahun (Format: Jika tahun ajar 2020/2021 tuliskan 2020)
            <span className="text-red-500"> required</span>
          </div>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3"
            type="text"
            name="year"
            pattern="20\d{2}"
            placeholder="ex. 2020"
            ref={register({
              required: 'Required',
            })}
          ></input>
          
          <div className="container py-3">Upload File Rekap Nilai (.csv, .xls, .xlsx)</div>
            <input
              id="file-input"
              className="container py-3"
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              name="gradeFile"
              ref={register({

              })}
          ></input>
          
          <div className="container py-3">
              Portofolio Dosen (Format: Jika desimal tuliskan hingga maks. 2 angka di belakang koma)
          </div>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3"
            type="text"
            name="porto"
            pattern="^\d\.?\d{0,2}$"
            placeholder="ex. 0.93"
            ref={register({
              
            })}
          ></input>

          <div className="container py-3">
            Upload Bobot setiap LO (Format: Jika desimal tuliskan hingga maks. 2 angka di belakang koma)
          </div>
          <LOInput title="UAS"></LOInput>
          <LOInput title="UTS"></LOInput>
          <LOInput title="Praktikum"></LOInput>
          <LOInput title="Kuis"></LOInput>
          <LOInput title="Latihan"></LOInput>

          <div className="container py-3">Upload kontribusi mata kuliah (KMT) terhadap LO (Format: Skala 1-3)</div>
          <LOInput title="KMT"></LOInput>

          <Button
          >Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default TeacherPage;
