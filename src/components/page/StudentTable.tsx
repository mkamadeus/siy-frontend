import {
    EyeOutline,
    PencilOutline,
    TrashOutline,
  } from '@graywolfai/react-heroicons';
  import { Link } from '@reach/router';
  import React from 'react';
  import { useMutation } from 'react-query';
  import { deleteStudent } from '~/api/Student';
  import { Student } from '~/model/Student';
  
  interface Props {
    students: Student[];
  }
  
  const StudentTable: React.FunctionComponent<Props> = ({ students }: Props) => {
    const deleteStudentMutation = useMutation(deleteStudent);
  
    if (students.length === 0) {
      return (
        <div className="text-center italic text-gray-700">There is no data!</div>
      );
    }
  
    return (
      <table className="table-auto w-full text-xs">
        <thead>
          <tr className="border-b border-gray-400 ">
            <th className="p-1">ID</th>
            <th className="p-1 text-left">Kode</th>
            <th className="p-1">Nama</th>
            <th className="p-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {students
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((student, index) => {
              return (
                <tr className="border-b border-gray-400" key={`student-${index}`}>
                  <td className="p-1 text-center">{student.id}</td>
                  <td className="p-1">{student.name}</td>
                  <td className="p-1 text-center flex justify-center space-x-3">
                    <Link to={`${student.id}`}>
                      <EyeOutline className="h-5 w-5 text-gray-500" />
                    </Link>
                    <div
                      onClick={async () => {
                        try {
                          if (
                            confirm(
                              `Apakah Anda yakin mau menghapus ${student.name}?`
                            )
                          ) {
                            await deleteStudentMutation.mutateAsync(student.id);
                            alert('Berhasil!');
                          }
                        } catch {
                          alert('Gagal :(');
                        }
                      }}
                    >
                      <TrashOutline className="h-5 w-5 text-gray-600" />
                    </div>
                    <Link to={`edit/${student.id}`}>
                      <PencilOutline className="h-5 w-5 text-gray-600" />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  };
  
  export default StudentTable;
  