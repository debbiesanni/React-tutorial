import { EmbededLeague } from '@components/shared/embededLeague/interface';
import { createSlice } from '@reduxjs/toolkit';

interface StateProps {
    leagues: EmbededLeague[];
    totalCount: number;
    pageCount: number;
    pageId: number;
    limit: number;
}

const initialState: StateProps = {
    leagues: [],
    totalCount: 0,
    pageCount: 0,
    pageId: 0,
    limit: 0,
};

const slice = createSlice({
    name: 'embededLeagues',
    initialState,
    reducers: {
        list: (state, { payload }) => {
            state.leagues = payload;
        },
        add: (state, { payload }) => {
            state.leagues.unshift(payload);
        },
        remove: (state, { payload }) => {
            state.leagues = state.leagues.filter(
                (league) => league.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.leagues.splice(payload.index, 1, payload.league);
        },
    },
});

export const {
    list: listEmbededLeague,
    add: addEmbededLeague,
    remove: removeEmbededLeague,
    edit: editEmbededLeague,
} = slice.actions;

export default slice.reducer;
