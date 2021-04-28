import { navigate } from '@reach/router';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useAsync, useLocalStorage } from 'react-use';
import { refresh } from '~/api/Auth';
import {
  getStudentDataBySession,
  getStudentGradesBySession,
} from '~/api/Session';
import { StudentGrade } from '~/model/Grade';
import { Student } from '~/model/Student';
import LoadingPage from '~/pages/common/LoadingPage';

export interface IAuthContext {
  student: Student;
  grades: StudentGrade[];
}

export const AuthContext = React.createContext<IAuthContext>({
  student: {
    id: 0,
    name: 'N/A',
    nim: '99999999',
    imgPath: 'N/A',
    loA: 0,
    loB: 0,
    loC: 0,
    loD: 0,
    loE: 0,
    loF: 0,
    loG: 0,
    ipk: 0,
  },
  grades: [],
});

const AuthContextProvider: React.FunctionComponent = (props) => {
  const [
    accessToken,
    setAccessToken,
    removeAccessToken,
  ] = useLocalStorage<string>('accessToken');
  const [refreshToken, , removeRefreshToken] = useLocalStorage<string>(
    'refreshToken'
  );

  const {
    data: student,
    isLoading: isStudentLoading,
    error: studentError,
    refetch: refetchStudent,
  } = useQuery(
    'student',
    () => getStudentDataBySession(accessToken as string),
    { refetchInterval: false }
  );

  const {
    data: grades,
    isLoading: isGradesLoading,
    error: gradesError,
    refetch: refetchGrades,
  } = useQuery(
    'grades',
    () => getStudentGradesBySession(accessToken as string),
    { refetchInterval: false }
  );

  const isLoading = useMemo(() => isStudentLoading || isGradesLoading, [
    isStudentLoading,
    isGradesLoading,
  ]);

  useAsync(async () => {
    console.log(accessToken, studentError, gradesError);
    if (studentError || gradesError) {
      removeAccessToken();
      try {
        const token = await refresh({ refreshToken: refreshToken as string });
        setAccessToken(token.accessToken);
        refetchStudent();
        refetchGrades();
      } catch (err) {
        removeRefreshToken();
        navigate('/');
      }
    }
  }, [accessToken, studentError, gradesError]);

  return (
    <AuthContext.Provider
      value={{ student: student as Student, grades: grades as StudentGrade[] }}
    >
      {isLoading ? <LoadingPage /> : props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
