import React from 'react';
import { useForm } from 'react-hook-form';
import { uploadFile } from '~/api/Grade';
import { Lecture } from '~/model/Lecture';

interface Props {
  lecture: Lecture;
}

const TeacherUpload: React.FunctionComponent<Props> = ({ lecture }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: { gradeFile: FileList }) => {
    try {
      await uploadFile(lecture.id, 2020, 1, data.gradeFile[0]);
      alert('Upload successful!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="container py-3"
        ref={register}
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        name="gradeFile"
      />
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
      >
        Update
      </button>
    </form>
  );
};

export default TeacherUpload;
