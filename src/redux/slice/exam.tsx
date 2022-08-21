import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    centreExams: {
        exams: [],
        pageId: 0,
        pageCount: 0,
        totalCount: 0,
        limit: 0,
    },
    examInCategory: {
        exams: [],
    },
};

const slice = createSlice({
    name: 'exam',
    initialState,
    reducers: {
        centreExams: (state, { payload }) => {
            state.centreExams.exams = payload;
        },
        add: (state, { payload }) => {
            state.centreExams.exams.unshift(payload);
        },
        remove: (state, { payload }) => {
            state.centreExams.exams = state.centreExams.exams.filter(
                (exam) => exam.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.centreExams.exams.splice(payload.index, 1, payload.exam);
        },
        examInCategory: (state, { payload }) => {
            state.examInCategory.exams = payload;
        },
        addExamInCat: (state, { payload }) => {
            state.examInCategory.exams.unshift(payload); 
        },
        removeExamInCat: (state, { payload }) => {
            state.examInCategory.exams.splice(payload.index, 1, payload.exam);
        },
        editExamInCat: (state, { payload }) => {
            state.examInCategory.exams.splice(payload.index, 1, payload.exam);
        },
    },
});
export const {
    centreExams,
    examInCategory,
    add: addExam,
    remove: removeExam,
    edit: editExam,
    addExamInCat: addExamInCategory,
    removeExamInCat: removeExamInCategory,
    editExamInCat: editExamInCategory,
} = slice.actions;

export default slice.reducer;
