import React from 'react';
import { useForm } from 'react-hook-form';
import { updateLecture } from '~/api/Lecture';
import { Lecture } from '~/model/Lecture';

interface Props {
  lecture: Lecture;
}

const LoTypes = [
  { varName: 'Final', display: 'UAS' },
  { varName: 'Mid', display: 'UTS' },
  { varName: 'Practicum', display: 'Praktikum' },
  { varName: 'Quiz', display: 'Kuis' },
  { varName: 'Homework', display: 'PR' },
  { varName: 'KMT', display: 'KMT' },
];

const LoCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const TeacherLoTable: React.FunctionComponent<Props> = ({ lecture }: Props) => {
  const { register, handleSubmit } = useForm<Partial<Lecture>>();

  const onSubmit = async (data: Partial<Lecture>) => {
    try {
      for (const loType of LoTypes) {
        let value = 0;
        for (const loCharacter of LoCharacters) {
          const loKey = `lo${loCharacter}${loType.varName}Weight` as keyof Lecture;
          value += data[loKey] || 0;
        }

        if (value > 0 && value < 1) {
          throw new Error(
            'Pastikan bobot bertotal satu atau nol di semua bagian.'
          );
        }
      }
      console.log(lecture.id, data);
      await updateLecture(lecture.id, data);
      // return true;
      alert('Berhasil update lecture!');
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {LoTypes.map(({ varName, display }, i) => {
        return (
          <div key={`lo-row-${i}`}>
            <div className="my-2">
              <div className="text-sm italic mb-2">Bobot LO {display}</div>
              <div className="flex flex-wrap md:justify-center p-0.5 -m-0.5 w-full">
                {LoCharacters.map((no, j) => {
                  const loKey = `lo${no}${varName}Weight` as keyof Lecture;
                  return (
                    <div
                      className="flex flex-col items-center p-1.5 m-0.5 rounded border border-gray-300 text-xs"
                      key={`lo-row-${i}-col-${j}`}
                    >
                      <div className="font-semibold mb-1">LO {no}</div>
                      <input
                        type="number"
                        name={loKey}
                        defaultValue={lecture[loKey]}
                        className="w-12 text-center p-0 border border-gray-300 rounded focus:ring-gray-400 focus:shadow"
                        ref={register({ min: 0, max: 1 })}
                        step="0.1"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
      >
        Update
      </button>
    </form>
  );
};

export default TeacherLoTable;
