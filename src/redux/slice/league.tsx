import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    centreLeagues: {
        leagues: [],
        totalCount: 0,
        pageCount: 0,
        pageId: 0,
        limit: 0,
    },
};
 
const slice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        centreLeagues: (state, { payload }) => {
            state.centreLeagues = payload;
        },
        add: (state, { payload }) => {
            state.centreLeagues.leagues.unshift(payload);
        },
        remove: (state, { payload }) => {
            state.centreLeagues.leagues = state.centreLeagues.leagues.filter(
                (league) => league.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.centreLeagues.leagues.splice(
                payload.index,
                1,
                payload.league
            );
        },
    },
});

export const {
    centreLeagues,
    add: addLeague,
    remove: removeLeague,
    edit: editLeague,
} = slice.actions;

export default slice.reducer;
