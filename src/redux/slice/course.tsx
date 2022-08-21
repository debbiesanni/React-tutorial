import { createSlice } from '@reduxjs/toolkit';
import { CoursesProps } from '@components/onlineCourse/interface';

interface StateProps { 
    centreCourses: CoursesProps;
}

const initialState: StateProps = {
    centreCourses: {
        courses: [],
        totalCount: 0,
        pageCount: 0,
        pageId: 0,
        limit: 0,
    },
};

const slice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        centreCourses: (state, { payload }) => {
            state.centreCourses = payload;
        },
        add: (state, { payload }) => {
            state.centreCourses.courses.unshift(payload);
        },
        remove: (state, { payload }) => {
            state.centreCourses.courses = state.centreCourses.courses.filter(
                (course) => course.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.centreCourses.courses.splice(
                payload.index,
                1,
                payload.course
            );
        },
    },
});

export const {
    centreCourses,
    add: addCourse,
    remove: removeCourse,
    edit: editCourse,
} = slice.actions;
export default slice.reducer;
