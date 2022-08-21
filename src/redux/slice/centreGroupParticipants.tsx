import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    centreGroupParticipant: {
        participants: [],
        totalCount: 0,
        pageCount: 0,
        pageId: 0,
        limit: 0,
    },
};

const slice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        centreGroupParticipant: (state, { payload }) => {
            state.centreGroupParticipant = payload;
        },
        add: (state, { payload }) => {
            state.centreGroupParticipant.participants.push(payload);
        },
        remove: (state, { payload }) => {
            state.centreGroupParticipant.participants = state.centreGroupParticipant.participants.filter(
                (participant) => participant.id !== payload.id
            );
        },
    },
});

export const {
    centreGroupParticipant,
    add: addParticipant,
    remove: removeParticipant,
} = slice.actions;
export default slice.reducer;
