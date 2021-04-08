import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import { getAllCourses } from '~/api/Course';
import { useQuery } from 'react-query';
import LoadingPage from './common/LoadingPage';

const TeacherPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('courseData', getAllCourses);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: unknown) => {
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
          {console.log(data)}
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
          <div className="container p-3">Nama Dosen Pengampu</div>
          <select
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            name="teacher"
            ref={register({
              required: 'Required',
            })}
          >
            <option label=" "></option>
            <option>Nama Dosen 1</option>
            <option>Nama Dosen 2</option>
            <option>Nama Dosen 3</option>
            <option>Nama Dosen 4</option>
          </select>
          <div className="container p-3">
            <div>Upload File Rekap Nilai</div>
            <input
              className="container p-3"
              type="file"
              accept="accept= .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              name="gradeFile"
              ref={register({
                required: 'Required',
              })}
            ></input>
          </div>
          <div className="container p-3">
            Input Pembobotan LO
            <div>Upload File Pembobotan LO</div>
            <input
              className="container p-3 mb-3"
              type="file"
              accept="accept= .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              name="loWeightFile"
              ref={register({
                required: 'Required',
              })}
            ></input>
            <Button type="submit">asd</Button>
          </div>
          <label htmlFor="LOuas" className="p-3">
            UAS (Format: LO_A LO_B LO_C LO_D LO_E LO_F LO_G)
          </label>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
            name="LOuas"
            pattern="^(\d+\.?\d{0,2} ){7}(\d+\.?\d{0,2})$"
            placeholder="ex. 1.23 1.23 1.23 1.23 1.23 1.23 1.23"
            ref={register({
              required: 'Required',
            })}
          ></input>
          <label htmlFor="LOuts" className="p-3">
            UTS (Format: LO_A LO_B LO_C LO_D LO_E LO_F LO_G)
          </label>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
            name="LOuts"
            pattern="^(\d+\.?\d{0,2} ){7}(\d+\.?\d{0,2})$"
            placeholder="ex. 1.23 1.23 1.23 1.23 1.23 1.23 1.23"
            ref={register({
              required: 'Required',
            })}
          ></input>
          <label htmlFor="LOkuis" className="p-3">
            Kuis (Format: LO_A LO_B LO_C LO_D LO_E LO_F LO_G)
          </label>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
            name="LOkuis"
            pattern="^(\d+\.?\d{0,2} ){7}(\d+\.?\d{0,2})$"
            placeholder="ex. 1.23 1.23 1.23 1.23 1.23 1.23 1.23"
            ref={register({
              required: 'Required',
            })}
          ></input>
          <label htmlFor="LOxrcs" className="p-3">
            Latihan (Format: LO_A LO_B LO_C LO_D LO_E LO_F LO_G)
          </label>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
            name="LOkxrcs"
            pattern="^(\d+\.?\d{0,2} ){7}(\d+\.?\d{0,2})$"
            placeholder="ex. 1.23 1.23 1.23 1.23 1.23 1.23 1.23"
            ref={register({
              required: 'Required',
            })}
          ></input>
          <label htmlFor="LOprktm" className="p-3">
            Praktikum (Format: LO_A LO_B LO_C LO_D LO_E LO_F LO_G)
          </label>
          <input
            className="container p-3 rounded-md border-b bg-gray-200 mb-3 mx-2"
            type="text"
            name="LOkprktm"
            pattern="^(\d+\.?\d{0,2} ){7}(\d+\.?\d{0,2})$"
            placeholder="ex. 1.23 1.23 1.23 1.23 1.23 1.23 1.23"
            ref={register({
              required: 'Required',
            })}
          ></input>
          <Button />
        </form>
      </div>
    </div>
  );
};

export default TeacherPage;
