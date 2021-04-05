import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import LOInput from '../components/page/LOInput'
import { getCourseData } from '~/api/Teacher';
import { useQuery } from 'react-query';
import LoadingPage from './common/LoadingPage';

const TeacherPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('courseData', getCourseData);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    alert('File berhasil tersimpan.');
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
          <div className="container p-3">Kode Mata Kuliah</div>
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
          
          <div className="container p-3">Semester</div>
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
            Tahun (format: Jika tahun ajar 2020/2021 tuliskan 2020)
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
            <div>Upload File Rekap Nilai</div>
            <input
              className="container p-3"
              type="file"
              accept="accept= .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              name="gradeFile"
            ></input>
          </div>
          
          <div className="container p-3">
              Portofolio Dosen
          </div>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
          ></input>

          <div className="container p-3">
            Upload Bobot setiap LO (Format: 2 angka di belakang koma)
          </div>
          
          <LOInput title="UAS"></LOInput>
          <LOInput title="UTS"></LOInput>
          <LOInput title="Praktikum"></LOInput>
          <LOInput title="Kuis"></LOInput>
          <LOInput title="Latihan"></LOInput>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default TeacherPage;
