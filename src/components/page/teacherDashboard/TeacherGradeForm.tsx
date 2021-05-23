import React from 'react';
import { useForm } from 'react-hook-form';
import { updateGradeById } from '~/api/Grade';
import { Grade } from '~/model/Grade';

interface FormProps {
  grade: Grade;
}

const fields = [
  { varName: 'finalTest', display: 'UAS' },
  { varName: 'midTest', display: 'UTS' },
  { varName: 'practicum', display: 'Praktikum' },
  { varName: 'quiz', display: 'Kuis' },
  { varName: 'homework', display: 'PR' }
];

const GradeForm: React.FC<FormProps> = ({
  grade,
}: FormProps) => {
  const { register, handleSubmit } = useForm<Partial<Grade>>();
  
  const onSubmit = async (data: Partial<Grade>) => {
    fields.map(({varName}) => {
      const gradeKey = varName as keyof Grade;
      data[gradeKey] = Number(data[gradeKey]);
    });

    try {
      updateGradeById(grade.id, data);
      alert('Berhasil memperbarui nilai mahasiswa.');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form 
      className="flex flex-col w-full mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map(({display, varName}) => {
        const gradeKey = varName as keyof Grade;

        return (
          <div key={`${varName}-field`}>
            <div className="container flex flex-row my-2">
              <label className="w-1/6 py-2">{display}</label>
              <input 
              className="w-full border-gray-300 rounded-md shadow-sm"
              type="number"
              name={varName}
              ref={ register({ min: 0, max: 100 }) }
              defaultValue={grade[gradeKey] as number}
              step={0.01}
              ></input>
            </div>
          </div>
        );
      })}
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default GradeForm;