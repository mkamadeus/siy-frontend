import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { getCourseById, updateCourse } from '~/api/Course';
import Button from '~/components/common/Button';
import CourseTable from '~/components/page/CourseTable';
import { Course } from '~/model/Course';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useMutation, useQuery } from 'react-query';
import LoadingPage from '~/pages/common/LoadingPage';

type RouteProps = {
  id: number;
};

const AdminCourseEditPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {
  const { register, handleSubmit } = useForm();
  const { data, isLoading, error } = useQuery(['courses', props.id], () =>
    getCourseById(props.id!)
  );
  const updateCourseMethod = async (data: Course) => {
    await updateCourse(props.id!, data);
  };
  const updateCourseMutation = useMutation(updateCourseMethod);

  if (error) {
    alert('error bang');
    return null;
  }

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  const onSubmit = async (data: Course) => {
    try {
      await updateCourseMutation.mutateAsync(data);
      alert('Berhasil!');
      navigate('/admin/course');
    } catch (err) {
      alert('Gagal :(');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Edit Course</div>
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
            defaultValue={data.code}
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
        <div className="flex items-center space-x-2">
          <label htmlFor="briefSyllabus" className="text-sm w-1/4">
            Silabus Ringkas
          </label>
          <textarea
            name="briefSyllabus"
            ref={register}
            defaultValue={data.briefSyllabus}
            className="border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="completeSyllabus" className="text-sm w-1/4">
            Silabus Lengkap
          </label>
          <textarea
            name="completeSyllabus"
            ref={register}
            defaultValue={data.completeSyllabus}
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
            defaultValue={data.outcome}
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
            defaultValue={data.credits}
            ref={register({ setValueAs: (val) => parseInt(val) })}
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

export default AdminCourseEditPage;
