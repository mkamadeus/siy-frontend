import React from 'react';
import { useForm } from 'react-hook-form';
import { updateLecture } from '~/api/Lecture';
import { Lecture } from '~/model/Lecture';

interface Props {
  lecture: Lecture;
}

const LoTypes = [
  { varName: 'FinalTest', display: 'UAS' },
  { varName: 'MidTest', display: 'UTS' },
  { varName: 'Practicum', display: 'Praktikum' },
  { varName: 'Quiz', display: 'Kuis' },
  { varName: 'Homework', display: 'PR' }
];

const LoCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const TeacherLoTable: React.FunctionComponent<Props> = ({ lecture }: Props) => {
  const { register, handleSubmit } = useForm<Partial<Lecture>>();

  const onSubmit = async (temp: Partial<Lecture>) => {
    try {
      const data: Partial<Lecture> = {
        loFinalTestWeight: [],
        loMidTestWeight: [],
        loQuizWeight: [],
        loHomeworkWeight: [],
        loPracticumWeight: []
      }

      for (const loType of LoTypes) {
        const values = [];
        const loKey = `lo${loType.varName}Weight` as keyof Lecture;
        
        for (let i=0; i < LoCharacters.length; i++) {
          const tempKey = loKey+LoCharacters[i] as keyof Lecture;
          values.push(Number(temp[tempKey]));
        }

        const total = values.reduce((a, b) => a + b);

        if (total != 0 && total != 1) {
          throw new Error(
            `Pastikan bobot ${loType.display} bertotal satu atau nol di semua bagian.`
          );
        }
        
        data[loKey] = values;
      }

      await updateLecture(lecture.id, data);
      alert('Berhasil update lecture!');
      //window.location.reload();
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
              <div className="flex flex-wrap justify-center sm:justify-between p-0.5 -m-0.5 w-full">
                {LoCharacters.map((no, j) => {
                  const loKey = `lo${varName}Weight` as keyof Lecture;
                  let val = lecture[loKey][j] as number;
                  val = isNaN(val) ? 0 : val;
                  return (
                    <div
                      className="flex flex-col w-1/8 min-w-max items-center p-1.5 m-0.5 rounded border border-gray-300 text-xs"
                      key={`lo-row-${i}-col-${j}`}
                    >
                      <div className="font-semibold mb-1">LO {no}</div>
                      <input
                        type="number"
                        name={loKey + no}
                        defaultValue={val}
                        className="w-14 text-center p-0 border border-gray-300 rounded focus:ring-gray-400 focus:shadow"
                        ref={ register({min: 0, max: 1}) }
                        step='0.1'
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
