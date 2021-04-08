import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import InputLO from '../components/page/LOInput';
import LoadingPage from './common/LoadingPage';
import { getAllCourses } from '~/api/Course';
import { useQuery } from 'react-query';

const TeacherPage: React.FC<RouteComponentProps> = (
    props: RouteComponentProps
) => {
    const { data, error, isLoading } = useQuery('courseData', getAllCourses);
    const { register, handleSubmit } = useForm();

    const isLOValid = (title: string, LOList: string[]) => {
        let value = 0;

        LOList.forEach(lo => {
            const elmt = document.getElementById(title + '-' + lo);
            if (elmt && elmt instanceof HTMLInputElement && elmt.value !== '')
                value += parseFloat(elmt.value);
        });

        return value === 0 || value === 1;
    }

    const isAllLOValid = () => {
        const LOList = ['LO-A', 'LO-B', 'LO-C', 'LO-D', 'LO-E', 'LO-F', 'LO-G'];
        const titleList = ['UAS', 'UTS', 'Praktikum', 'Kuis', 'Latihan'];
        let LOValid = true;

        titleList.forEach(title => {
            LOValid = LOValid && isLOValid(title, LOList);
        });

        return LOValid;
    };

    const isFileValid = () => {
        const elmt = document.getElementById('file-input');
        if (elmt && elmt instanceof HTMLInputElement) {
            if (elmt.value === '') {
                return true;
            }
            else {
                const splitPath = elmt.value.split('.');
                const format = splitPath[splitPath.length - 1];

                return (format === 'csv' || format === 'xls' || format === 'xlsx');
            }
        }
        else {
            return false;
        }
    };

    const onSubmit = (values: unknown) => {
        const LOValid = isAllLOValid();
        const FileValid = isFileValid();
        
        if (LOValid && FileValid) {
            alert('Input berhasil disimpan');
            // TODO : Post form
        }
        else {
            if (!FileValid) {
                alert('Input file masih belum benar.');
            }

            if (!LOValid) {
                alert('Input LO masih belum benar.');
            }
        }
    };

    if (error) {
        alert(error);
    }

    if (isLoading || !data) {
        return <LoadingPage />;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col">
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container py-3">
                        Kode Mata Kuliah
                        <span className="text-red-500"> required</span>
                    </div>
                    <select
                        className="container py-3 rounded-md border-b bg-gray-200 mb-3"
                        name="course"
                        ref={register({
                            required: 'Required',
                        })}
                    >
                        <option label=" "></option>
                        {data.map((d) => (
                            <option key={d.code}>{d.code}</option>
                        ))}
                    </select>


                    <div className="container py-3">
                        Semester
                        <span className="text-red-500"> required</span>
                    </div>
                    <select
                        className="container py-3 rounded-md border-b bg-gray-200 mb-3"
                        name="semester"
                        ref={register({
                            required: 'Required',
                        })}
                    >
                        <option label=" "></option>
                        <option>1</option>
                        <option>2</option>
                    </select>


                    <div className="container py-3">
                        Tahun (Format: Jika tahun ajaran 2020/2021 tuliskan 2020)
                        <span className="text-red-500"> required</span>
                    </div>
                    <input
                        className="container p-3 rounded-md border-b bg-gray-200 mb-3"
                        type="text"
                        name="year"
                        pattern="20\d{2}"
                        placeholder="ex. 2020"
                        ref={register({
                            required: 'Required',
                        })}
                    ></input>


                    <div className="container py-3">
                        Upload File Rekap Nilai (.csv, .xls, ,xlsx)
                    </div>
                    <input
                        id="file-input"
                        className="container py-3"
                        type="file"
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        name="gradeFile"
                    ></input>


                    <div className="container py-3">
                        Portofolio Dosen (Format: Jika desimal tuliskan hingga dua angka di belakang koma)
                    </div>
                    <input
                        className="container p-3 rounded-md border-b bg-gray-200 mb-3"
                        type="text"
                        placeholder="ex. 0.93"
                        pattern="^\d\.?\d{0,2}$"
                    ></input>


                    <div className="container py-3">
                        Bobot Setiap LO (Format: Jika Desimal tuliskan hingga dua angka di belakang koma)
                    </div>
                    <InputLO title="UAS" pattern="^\d\.?\d{0,2}$">Bobot LO UAS</InputLO>
                    <InputLO title="UTS" pattern="^\d\.?\d{0,2}$">Bobot LO UTS</InputLO>
                    <InputLO title="Praktikum" pattern="^\d\.?\d{0,2}$">Bobot LO Praktikum</InputLO>
                    <InputLO title="Kuis" pattern="^\d\.?\d{0,2}$">Bobot LO Kuis</InputLO>
                    <InputLO title="Latihan" pattern="^\d\.?\d{0,2}$">Bobot LO Latihan</InputLO>


                    <div className="container py-3">
                        Kontribusi mata kuliah LO (Format: Bilangan bulat skala 1 (terendah) hingga 3 (terberat))
                    </div>
                    <InputLO title="KMT" pattern="^[1,2,3]$">Kontribusi Mata Kuliah terhadap LO</InputLO>


                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default TeacherPage;