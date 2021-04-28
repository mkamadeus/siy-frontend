import { RatingQuestionnaire } from '~/model/RatingQuestionnaire';
import { BaseInstance } from './Base';

export const getAllQuestionnaires = async (): Promise<RatingQuestionnaire[]> => {
    const rqs = await BaseInstance.get<RatingQuestionnaire[]>('/questionnaire');
    return rqs.data;
}

export const getOneQuestionnaire = async (id:number): Promise<RatingQuestionnaire> => {
    const rq = await BaseInstance.get<RatingQuestionnaire>(`/questionnaire/${id}`);
    return rq.data;
}

export const getQuestionnairesByLecture = async (id:number): Promise<RatingQuestionnaire[]> => {
    const rqs = await BaseInstance.get<RatingQuestionnaire[]>(`/questionnaire/lectures/${id}`);
    return rqs.data;
}

export const createQuestionnaire = async (rqData: RatingQuestionnaire): Promise<RatingQuestionnaire> => {
    const rq = await BaseInstance.post<RatingQuestionnaire>('/questionnaire', rqData);
    return rq.data;
}

export const createLectureQuestionnaire = async (nim: string, id: number, rqData: RatingQuestionnaire): Promise<RatingQuestionnaire> => {
    const rq = await BaseInstance.post<RatingQuestionnaire>(`/questionnaire/${nim}/rq/${id}`, rqData);
    return rq.data;
}

export const updateQuestionnaire = async (id: number, rqData: Partial<RatingQuestionnaire>): Promise<RatingQuestionnaire> => {
    const rq = await BaseInstance.put<RatingQuestionnaire>(`/questionnaire/${id}`, rqData);
    return rq.data;
}

export const deleteQuestionnaire = async (id: number): Promise<void> => {
    await BaseInstance.delete<RatingQuestionnaire>(`/questionnaire/${id}`);
}