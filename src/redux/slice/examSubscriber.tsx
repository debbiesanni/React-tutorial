import { createSlice } from '@reduxjs/toolkit';

// interface examSubscriberProp {
//     examSubscriber: []
// }

const initialState = {
        examSubscriber: []
};

const slice = createSlice({
    name: 'examSubscribers',
    initialState,
    reducers: {
        list: (state, { payload }) => {
            state.examSubscriber = payload;
        },
        add: (state, { payload }) => {
            state.examSubscriber.unshift(payload);
        },
        remove: (state, { payload }) => {
            state.examSubscriber = state.examSubscriber.filter(
                (subscriber) => subscriber.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.examSubscriber.splice(payload.index, 1, payload.subscriber);
        },
    },
});

export const {
    list: listExamSubscriber,
    add: addExamSubscriber,
    remove: removeExamSubscriber,
    edit: editExamSubscriber,
} = slice.actions;

export default slice.reducer;