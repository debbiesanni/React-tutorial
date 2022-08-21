import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    centreReviews: {
        reviews: [],
        totalCount: 0,
        pageCount: 0,
        pageId: 0,
        limit: 0,
    },
    commentReview: {
        reviews: [],
        totalCount: 0,
        pageCount: 0,
        pageId: 0,
        limit: 0,
    }
};

const slice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        centreReviews: (state, { payload }) => {
            state.centreReviews = payload;
        },
        commentReview: (state, { payload }) => {
            state.commentReview.reviews.push(payload);
        },
        add: (state, { payload }) => {
            state.centreReviews.reviews.push(payload);
        },
        addComment: (state, { payload }) => {
            state.commentReview.reviews.push(payload);
        },
        remove: (state, { payload }) => {
            state.centreReviews.reviews = state.centreReviews.reviews.filter(
                (review) => review.id !== payload.id
            );
        },
        removeComment: (state, { payload }) => {
            state.commentReview.reviews = state.commentReview.reviews.filter(
                (comment) => comment.id !== payload.id
            );
        },
        edit: (state, { payload }) => {
            state.centreReviews.reviews.splice(
                payload.index,
                1,
                payload.review
            );
        },
        editComment: (state, { payload }) => {
            
            state.commentReview.reviews.splice(
                payload.index,
                1,
                payload.comment
            );
        },
    },
});

export const {
    centreReviews,
    commentReview,
    add: addReviews,
    addComment: addCommentRedux,
    remove: removeReviews,
    removeComment: removeCommentRedux,
    edit: editReviews,
    editComment: editCommentRedux,
} = slice.actions;
export default slice.reducer;
