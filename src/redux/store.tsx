import { configureStore } from '@reduxjs/toolkit'; 

import reducer from './slice';

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
