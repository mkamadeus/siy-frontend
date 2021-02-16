import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getStudentData } from '~/api/Student';
import { useQuery } from 'react-query';
import TranscriptTable from '~/components/page/TranscriptTable';

const TranscriptPage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('userData', getStudentData);

  if (data) {
    return (
      <div className="container mx-auto p-6">
        {data.transcript
          .sort((t1, t2) => {
            if (t1.year > t2.year) return 1;
            if (t1.year < t2.year) return -1;
            return 0;
          })
          .map(({ year, semester, courses }) => {
            return (
              <div
                key={`transcript-table-${year}-${semester}`}
                className="mb-4"
              >
                <div>
                  <div className="font-bold text-lg">Tahun Ajaran {year}</div>
                  <div className="italic text-sm">Semester {semester}</div>
                </div>
                <div>
                  <TranscriptTable courses={courses} isLoading={isLoading} />
                </div>
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default TranscriptPage;
