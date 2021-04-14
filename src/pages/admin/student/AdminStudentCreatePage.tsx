import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { createStudent } from '~/api/Student';
import { Student } from '~/model/Student';

const AdminStudentCreatePage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: Student) => {
    try {
      await createStudent(data);
      alert('Berhasil!');
      navigate('/admin/student');
    } catch (err) {
      alert('Gagal :(');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Create Student</div>
      <form
        className="flex flex-col space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center space-x-2">
          <label htmlFor="code" className="text-sm w-1/4">
            NIM
          </label>
          <input
            name="code"
            type="text"
            ref={register}
            className="border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="name" className="text-sm w-1/4">
            Nama
          </label>
          <input
            name="name"
            type="text"
            ref={register}
            className="border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminStudentCreatePage;
