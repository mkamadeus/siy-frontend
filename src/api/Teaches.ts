import axios from 'axios';
import { Teaches } from '~/model/Teaches';
import { BaseInstance } from './Base';

export const getTeachesData = async(): Promise<Teaches[]> => {
    const teaches = await BaseInstance.get<Teaches[]>('/teaches');
    return teaches.data;
}

export const getTeachesById = async(id: number): Promise<Teaches> => {
    const teaches = await BaseInstance.get<Teaches>(`/teaches/${id}`);
    return teaches.data;
}

export const getTeachesByLecture = async(id:number): Promise<Teaches[]> => {
    const teaches = await BaseInstance.get<Teaches[]>(`/teaches/lecture/${id}`);
    return teaches.data;
}

export const createTeaches = async(teachesData: Teaches): Promise<Teaches> => {
    const teaches = await BaseInstance.post<Teaches>('/teaches', teachesData);
    return teaches.data;
}

export const updatePortofolio = async (
    lectureId: number,
    teacherId: number,
    teachesData: Partial<Teaches>
): Promise<Teaches> =>{
    const teaches = await BaseInstance.put<Teaches>(
        `teaches/portofolio/${lectureId}/${teacherId}`,
        teachesData
    );
    return teaches.data;
}

export const updateTeaches = async (
    id: number,
    teachesData: Partial<Teaches>
): Promise<Teaches> => {
    const teaches = await BaseInstance.put<Teaches>(
        `teaches/${id}`,
        teachesData
    );
    return teaches.data;
}