import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { createCourse } from '~/api/Course';
import { Course } from '~/model/Course';

const AdminLectureCreatePage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: Course) => {
    try {
      await createCourse(data);
      alert('Berhasil!');
      navigate('/admin/course');
    } catch (err) {
      alert('Gagal :(');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Create Course</div>
      <form
        className="flex flex-col space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center space-x-2">
          <label htmlFor="code" className="text-sm w-1/4">
            Kode
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
        <div className="flex items-center space-x-2">
          <label htmlFor="briefSyllabus" className="text-sm w-1/4">
            Silabus Ringkas
          </label>
          <textarea
            name="briefSyllabus"
            ref={register}
            className="border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="briefSyllabus" className="text-sm w-1/4">
            Silabus Lengkap
          </label>
          <textarea
            name="briefSyllabus"
            ref={register}
            className="border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="outcome" className="text-sm w-1/4">
            Luaran
          </label>
          <textarea
            name="outcome"
            ref={register}
            className="border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="credits" className="text-sm w-1/4">
            SKS
          </label>
          <input
            name="credits"
            type="number"
            ref={register({ setValueAs: (val) => parseInt(val) })}
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

export default AdminLectureCreatePage;
