import { createSlice } from '@reduxjs/toolkit';

interface Props {
    showSideNav: boolean;
    showHeader: boolean;
    showFooter: boolean;
    mode: 'dark' | 'light';
}

let state: Props;
const initialState: Props = {
    showSideNav: true,
    mode: 'light',
    showFooter: true,
    showHeader: true,
};

const slice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        showHeader: (state, { payload }) => {
            state.showHeader = payload;
        },
        showFooter: (state, { payload }) => {
            state.showFooter = payload;
        },
        showSideNav: (state, { payload }) => {
            state.showSideNav = payload;
        },
        changeMode: (state, { payload }) => {
            state.mode = payload;
        },
    },
});

export const {
    showSideNav,
    showFooter,
    showHeader,
    changeMode,
} = slice.actions;

export default slice.reducer;
