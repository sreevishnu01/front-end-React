import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: JSON.parse(localStorage.getItem("blogposts")) || null,
    isFetching: false,
    error: false

}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        blogPostAll: (state, action) => {
            state.data = action.payload;
            localStorage.setItem('blogposts', JSON.stringify(state.data))
        },
    }
})

export const { blogPostAll } = blogSlice.actions;
export default blogSlice.reducer;