import { createSlice } from '@reduxjs/toolkit';
import { session, logout } from 'utils';

export interface UserProps {
    firstname: string;
    lastname: string;
    surname: string;
    id: string;
    username: string;
    rating: number;
    email: string;
    phoneNumber: string;
    gender: string;
    avatar: string;
    status: string;
    bio: string;
    roleName: string;
    roleId: string;
    position: string;
    token: string;
    placeOfWork: string;
    joinedLeagues: string[];
    managingCentres: string[] | any;
    ownCentres: string[];
    pendingCentres: string[];
    subscribedCentres: string[];
    subscribedExams: string[];
    subscribedCourses: string[];
    subscribedPublications: string[];
}

const initialState: UserProps | null =
    ((session.get('user') as unknown) as UserProps) || null;

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        profile: (state, { payload }) => (state = payload),
        logout: (state) => {
            logout();
            state = null;
        },
    },
});

export const { profile: setUserProfile, logout: logoutUser } = slice.actions;

export default slice.reducer;
