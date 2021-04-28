import React from 'react';
import { useForm } from 'react-hook-form';
import { Lecture } from '~/model/Lecture';
import { Teacher } from '~/model/Teacher';

interface Props {
  teacher: Teacher;
  lecture: Lecture;
}

const TeacherPortfolio : React.FunctionComponent<Props> = ({ teacher, lecture }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: { teacherPresence: number }) => {
    try {
      // TODO: get teacher id for kehadiran
      alert('Berhasil!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label htmlFor=""></label>
        <input
          type="number"
          ref={register({ min: 0, max: 100 })}
          name="teacherPresence"
          className="border-gray-300 rounded-md shadow-sm w-full"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
      >
        Update
      </button>
    </form>
  );
};

export default TeacherPortfolio;
