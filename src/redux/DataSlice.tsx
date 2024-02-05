import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataItem } from "../models/models";

interface InitialState {
  posts: DataItem[];
  error: string | null;
  loading: boolean;
  end: boolean;
}

const initialState: InitialState = {
  posts: [],
  error: "",
  loading: true,
  end: false,
};

const DataSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsSuccess(state, action: PayloadAction<DataItem[]>) {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    getPostFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    getPostLoading(state) {
      state.loading = true;
      state.error = null;
    },
    addMorePosts(state, action: PayloadAction<DataItem[]>) {
      state.posts.push(...action.payload);
      state.loading = false;
      state.error = null;
    },
    getPostEnd(state) {
      state.end = true;
    },
  },
});

export const GET_POSTS = "posts/getPosts";
export const getPosts = createAction(GET_POSTS);
export const GET_MORE_POSTS = "posts/getMorePosts";
export const getMorePosts = createAction<string>(GET_MORE_POSTS);

export const {
  getPostsSuccess,
  getPostFailed,
  getPostLoading,
  addMorePosts,
  getPostEnd,
} = DataSlice.actions;

export default DataSlice.reducer;
