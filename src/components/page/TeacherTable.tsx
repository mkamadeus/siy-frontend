import {
    EyeOutline,
    PencilOutline,
    TrashOutline,
  } from '@graywolfai/react-heroicons';
  import { Link } from '@reach/router';
  import React from 'react';
  import { useMutation } from 'react-query';
  import { deleteTeacher } from '~/api/Teacher';
  import { Teacher } from '~/model/Teacher';
  
  interface Props {
    teachers: Teacher[];
  }
  
  const TeacherTable: React.FunctionComponent<Props> = ({ teachers }: Props) => {
    const deleteTeacherMutation = useMutation(deleteTeacher);
  
    if (teachers.length === 0) {
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
          {teachers
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((teacher, index) => {
              return (
                <tr className="border-b border-gray-400" key={`course-${index}`}>
                  <td className="p-1 text-center">{teacher.id}</td>
                  <td className="p-1">{teacher.name}</td>
                  <td className="p-1 text-center flex justify-center space-x-3">
                    <Link to={`${teacher.id}`}>
                      <EyeOutline className="h-5 w-5 text-gray-500" />
                    </Link>
                    <div
                      onClick={async () => {
                        try {
                          if (
                            confirm(
                              `Apakah Anda yakin mau menghapus ${teacher.name}?`
                            )
                          ) {
                            await deleteTeacherMutation.mutateAsync(teacher.id);
                            alert('Berhasil!');
                          }
                        } catch {
                          alert('Gagal :(');
                        }
                      }}
                    >
                      <TrashOutline className="h-5 w-5 text-gray-600" />
                    </div>
                    <Link to={`edit/${teacher.id}`}>
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
  
  export default TeacherTable;
  