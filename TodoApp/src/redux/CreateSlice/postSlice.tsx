import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {

  id: number;
  title: string;
}

interface PostState {

  posts: Post[];
  loading: boolean;
}

const initialState: PostState = {

  posts: [],
  loading: false,
};

const postSlice = createSlice({

  name: "post",
  initialState,

  reducers: {

    startLoading: (state) => {
      state.loading = true;
    },

    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.loading = false;
    },

    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },

  },
});

export const { startLoading, setPosts, addPost } = postSlice.actions;
export default postSlice.reducer;