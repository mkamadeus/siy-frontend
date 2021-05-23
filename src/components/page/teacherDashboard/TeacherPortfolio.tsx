import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getTeachingHistoriesByTeacherId, updatePorto } from '~/api/TeachingHistory';
import { Lecture } from '~/model/Lecture';
import { Teacher } from '~/model/Teacher';
import { TeachingHistory } from '~/model/TeachingHistory';

interface Props {
  teacher: Teacher;
  lecture: Lecture;
}

const TeacherPortfolio : React.FunctionComponent<Props> = ({ teacher, lecture }: Props) => {
  const { register, handleSubmit } = useForm();

  const { data, isLoading } = useQuery(
    ['teaching-history', teacher.id],
    () => getTeachingHistoriesByTeacherId(teacher.id).then(
      (tHistories) => {
        return tHistories.find((tHistory) => {
          return tHistory.lectureId == lecture.id;
        });
      }
    )
  );

  if (!data || isLoading) return null;
  const onSubmit = async (data: Partial<TeachingHistory>) => {
    data.portfolio = Number(data.portfolio);
    
    try {
      await updatePorto(lecture.id, teacher.id, data);
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
          ref={ register({ min: 0, max: 100 }) }
          name="portfolio"
          defaultValue={data.portfolio as number}
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
