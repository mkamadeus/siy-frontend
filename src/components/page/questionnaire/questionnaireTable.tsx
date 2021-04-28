import { navigate } from '@reach/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import { getTeachesByLecture } from '~/api/Teaches';
import { Lecture } from '~/model/Lecture';
import LoadingPage from '~/pages/common/LoadingPage';
// import { StudentGrade } from '~/model/Grade';

interface Props {
    //grade: StudentGrade;
    lecture: Lecture;
}

interface ItemProps {
    lectureId: number;
}

const QuestionnaireTableItem: React.FunctionComponent<ItemProps> =({
    lectureId
}: ItemProps) => {
    const {data: teaches, isLoading, error} = useQuery(
        ['teaches', lectureId],
        () => {return getTeachesByLecture(lectureId);}
    );

    if (error) {
        alert('error bang');
        return null;
    }
    
    if (isLoading) {
        return <LoadingPage />;
    }

    if (!teaches) return null;

    return (
        <div>
            {teaches.map((teach, index) => {
                //const teacher = getTeacherById(teach.id);
                return(
                    <div key={`teacher-${index}`}>
                        {/**teacherPromise.then((res) => {return res.name})*/}
                    <table className="table-auto w-full mt-4 mb-4">
                        <thead>
                            <tr className="border-b border-gray-400">
                                <th className="text-left w-1/12">No.</th>
                                    <th className="text-center w-7/12">Pertanyaan</th>
                                    <th className="text-center w-4/12">Skor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">1</td>
                                <td className="text-left w-7/12">
                                    Dosen berkomunikasi dengan efektif.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${2}-${index}`} key={`m-${2}-${index}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${2}-${index}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${2}-${index}`} key={`m-${2}-${index}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${2}-${index}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${2}-${index}`} key={`m-${2}-${index}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${2}-${index}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${0}-${index}`} key={`m-${2}-${index}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${2}-${index}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">2</td>
                                <td className="text-left w-7/12">
                                    Dosen peduli terhadap pencapaian atau penguasaan mahasiswa akan luaran matakuliah ini.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${6}-${index}`} key={`m-${6}-${index}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${6}-${index}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${6}-${index}`} key={`m-${6}-${index}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${6}-${index}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${6}-${index}`} key={`m-${6}-${index}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${6}-${index}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${6}-${index}`} key={`m-${6}-${index}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${6}-${index}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">3</td>
                                <td className="text-left w-7/12">
                                    Dosen berlaku adil (fair) kepada mahasiswa.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${9}`} key={`m-${9}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${9}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${9}`} key={`m-${9}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${9}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${9}`} key={`m-${9}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${9}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${9}`} key={`m-${9}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${9}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                )
            })}
            
        </div>
    )
}

const QuestionnaireTable: React.FunctionComponent<Props> = ({
    lecture //grade
}: Props) => {
    //const lectureId = grade.lectureId;
    const lectureId = lecture.id;
    const courseId = lecture.courseId;
    const {data:course, isLoading, error} = useQuery(['course', courseId],
    () => getCourseById(courseId))

    if (error) {
        alert('error bang');
        return null;
    }
    
    if (isLoading) {
        return <LoadingPage />;
    }

    const {register, handleSubmit} = useForm();
    const onSubmit = (data: unknown) => {
        console.log(data);
        navigate('/questionnaire');
    }


    return(
        <div className="container mx-auto p-6 text-xs md:text-base">
            <div className="font-bold text-2xl mb-2">
                Form Kuesioner Perkuliahan
            </div>
            <div className="font-bold text-2xl mb-2 mt-4">
                {course?.code} {course?.name} Semester {lecture.semester} Tahun {lecture.year}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="border-b border-gray-400">
                                <th className="text-left w-1/12">No.</th>
                                <th className="text-center w-7/12">Pertanyaan</th>
                                <th className="text-center w-4/12">Skor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">1</td>
                                <td className="text-left w-7/12">
                                    Saya memperoleh informasi yang cukup tentang hal-hal tertentu yang harus saya capai atau kuasai (luaran matakuliah) sesudah mengikuti matakuliah ini.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check" ref={register}>
                                        <input className="form-check-input" type="radio" name={`m-${7}`} key={`m-${7}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${7}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${7}`} key={`m-${7}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${7}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${7}`} key={`m-${7}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${7}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${7}`} key={`m-${7}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${7}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">2</td>
                                <td className="text-left w-7/12">
                                    Pelaksanaan perkuliahan diarahkan agar mahasiswa dapat mencapai atau menguasai luaran matakuliah ini.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${1}`} key={`m-${1}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${1}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${1}`} key={`m-${1}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${1}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${1}`} key={`m-${1}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${1}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${1}`} key={`m-${1}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${1}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">3</td>
                                <td className="text-left w-7/12">
                                    Saya mencapai atau menguasai luaran matakuliah ini.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${10}`} key={`m-${10}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${10}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${10}`} key={`m-${10}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${10}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${10}`} key={`m-${10}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${10}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${10}`} key={`m-${10}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${10}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">4</td>
                                <td className="text-left w-7/12">
                                    Pelaksanaan perkuliahan terorganisir dengan baik.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${5}`} key={`m-${5}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${5}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${5}`} key={`m-${5}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${5}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${5}`} key={`m-${5}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${5}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${5}`} key={`m-${5}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${5}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">5</td>
                                <td className="text-left w-7/12">
                                    Beban kerja untuk matakuliah ini sesuai dengan SKS-nya.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${8}`} key={`m-${8}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${8}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${8}`} key={`m-${8}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${8}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${8}`} key={`m-${8}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${8}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${8}`} key={`m-${8}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${8}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">6</td>
                                <td className="text-left w-7/12">
                                    Sarana prasarana untuk matakuliah tersedia dengan memadai.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${3}`} key={`m-${3}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${3}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${3}`} key={`m-${3}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${3}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${3}`} key={`m-${3}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${3}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${3}`} key={`m-${3}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${3}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">7</td>
                                <td className="text-left w-7/12">
                                    Tersedia cukup fasilitas pendukung di luar kuliah yang memungkinkan saya mengikuti matakuliah ini dengan baik.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${4}`} key={`m-${4}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${4}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${4}`} key={`m-${4}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${4}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${4}`} key={`m-${4}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${4}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${4}`} key={`m-${4}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${4}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">8</td>
                                <td className="text-left w-7/12">
                                    Saya berusaha dengan sungguh-sungguh mengikuti matakuliah ini.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${11}`} key={`m-${11}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${11}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${11}`} key={`m-${11}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${11}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${11}`} key={`m-${11}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${11}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${11}`} key={`m-${11}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${11}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="text-left w-1/12">9</td>
                                <td className="text-left w-7/12">
                                    Saya memperoleh pengalaman belajar yang positif dalam matakuliah ini.
                                    </td>
                                <td className="text-center w-4/12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={`m-${12}`} key={`m-${12}-1`} value={1}/>
                                        <label className="form-check-label" htmlFor={`m-${12}-1`}>
                                            1
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${12}`} key={`m-${12}-2`} value={2}/>
                                        <label className="form-check-label" htmlFor={`m-${12}-2`}>
                                            2
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${12}`} key={`m-${12}-3`} value={3}/>
                                        <label className="form-check-label" htmlFor={`m-${12}-3`}>
                                            3
                                        </label>
                                        <input className="form-check-input" type="radio" name={`m-${12}`} key={`m-${12}-4`} value={4}/>
                                        <label className="form-check-label" htmlFor={`m-${12}-4`}>
                                            4
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <QuestionnaireTableItem lectureId={lectureId}>
                    </QuestionnaireTableItem>
                </div>

                <button 
                type="submit" 
                className="flex w-6/12 items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default QuestionnaireTable;