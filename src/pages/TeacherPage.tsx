import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

const TeacherPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container p-3">
            <div>Upload File Rekap Nilai</div>
            <input
              type="file"
              accept="accept=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              name="gradeFile"
              ref={register({
                required: 'Required',
              })}
            ></input>
          </div>
          <div className="container p-3">
            <div>Upload File Pembobotan LO</div>
            <input
              type="file"
              accept="accept=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              name="loWeightFile"
              ref={register({
                required: 'Required',
              })}
            ></input>
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherPage;
