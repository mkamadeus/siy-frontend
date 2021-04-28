import React from 'react';
import { Link } from '@reach/router';
import { useQuery } from 'react-query';
import { StudentGrade } from '~/model/Grade';
import { getLectureById } from '~/api/Lecture';
import { getCourseById } from '~/api/Course';

interface Props {
    grades: StudentGrade[];
}

interface ItemProps {
    grade: StudentGrade;
}

const QuestionnaireIndexTableItem: React.FunctionComponent<ItemProps> = ({
    grade,
}: ItemProps) => {
    const lectureId = grade.lectureId;
    const {data: lecture, isLoading: isLectureLoading } = useQuery(
        ['lecture', lectureId],
        () => getLectureById(lectureId)
    );
    const courseId = lecture?.courseId as number;
    const {data: course, isLoading: isCourseLoading } = useQuery(
        ['course', courseId],
        () => getCourseById(courseId)
    );

    if (!course || isCourseLoading) return null;
    if (!lecture || isLectureLoading) return null;
  
    return (
        <tr className="border-b border-gray-400" key={`questionnaire-${grade.id}`}>
            <td className="p-1 text-center">
                <Link to={`lecture/${lecture.id}/grade/${grade.id}`}>
                    <button className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform focus:ring focus:outline-none focus:bg-blue-600">
                        Review
                    </button>
                </Link>
                </td>
            <td className="p-1 text-center">{course.code}</td>
            <td className="p-1 text-center">{course.name}</td>
    </tr>
    );
};

const QuestionnaireIndexTable: React.FunctionComponent<Props> = ({
    grades,
}: Props) => {
    if (grades.length === 0) {
        return(
            <div className="text-center italic w-full text-gray-700">There is no data!</div>  
        );
    }
    return(
        <table className="table-auto w-full">
            <thead>
                <tr className="border-b border-gray-400 ">
                    <th className="p-1 text-center w-3/12"></th>
                    <th className="p-1 text-center w-3/12">Kode</th>
                    <th className="p-1 text-center w-6/12">Mata Kuliah</th>
                </tr>
            </thead>
            <tbody>
                {grades.map((grade, index) => (
                    <QuestionnaireIndexTableItem
                        key={`table-item-${index}`}
                        grade={grade}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default QuestionnaireIndexTable;

