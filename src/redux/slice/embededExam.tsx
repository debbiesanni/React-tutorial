import { createSlice } from '@reduxjs/toolkit';

// interface StateProps {
//     exams: EmbededLeague[];
//     totalCount: number;
//     pageCount: number;
//     pageId: number;
//     limit: number;
// }

const initialState = {
        exams: [],
        totalCount: 0,
        pageCount: 0,
        pageId: 0,
        limit: 0,
};

const slice = createSlice({ 
    name: 'embededExams',
    initialState,
    reducers: {
        list: (state, { payload }) => {
            state.exams = payload;
        },
        add: (state, { payload }) => {
            state.exams.unshift(payload);
        },
        remove: (state, { payload }) => {
            state.exams = state.exams.filter(
                (exam) => exam.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.exams.splice(payload.index, 1, payload.exam);
        },
    },
});
export const {
    list: listEmbededExams,
    add: addEmbededExam,
    remove: removeEmbededExam,
    edit: editEmbededExam,
} = slice.actions;

export default slice.reducer;
