import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    centrePublications: {
        publications: [],
        totalCount: 0,
        pageCount: 0,
        pageId: 0,
        limit: 0,
    },
};
 
const slice = createSlice({
    name: 'publication',
    initialState,
    reducers: {
        centrePublications: (state, { payload }) => {
            state.centrePublications = payload;
        },
        add: (state, { payload }) => {
            state.centrePublications.publications.unshift(payload);
        },
        remove: (state, { payload }) => {
            state.centrePublications.publications = state.centrePublications.publications.filter(
                (publication) => publication.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.centrePublications.publications.splice(
                payload.index,
                1,
                payload.publication
            );
        },
    },
});

export const {
    centrePublications,
    add: addPublication,
    remove: removePublication,
    edit: editPublication,
} = slice.actions;

export default slice.reducer;
