import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { getStudentById, updateStudent } from '~/api/Student';
import { Student } from '~/model/Student';
import { useQuery } from 'react-query';
import LoadingPage from '~/pages/common/LoadingPage';

type RouteProps = {
  id: number;
};

const AdminStudentEditPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {
  const studentId = props.id as number;

  const { register, handleSubmit } = useForm();
  const { data, isLoading, error } = useQuery(['students', studentId], () =>
    getStudentById(studentId)
  );

  if (error) {
    alert('error bang');
    return null;
  }

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  const onSubmit = async (data: Student) => {
    try {
      await updateStudent(studentId, data);
      alert('Berhasil!');
      navigate('/admin/student');
    } catch (err) {
      alert('Gagal :(');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Edit Student</div>
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
            defaultValue={data.id}
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
            defaultValue={data.name}
            className="border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminStudentEditPage;
