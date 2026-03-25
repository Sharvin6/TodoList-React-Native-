import { AppDispatch } from "../store/store";
import { api } from "../../services/api";
import { setPosts, startLoading, addPost, Post } from "../CreateSlice/postSlice";

export const fetchPosts = () => {

  return async (dispatch: AppDispatch) => {

    dispatch(startLoading());

    try {

      const response = await api.get("/posts");
      dispatch(setPosts(response.data));
    } catch (error) {
      console.log("Api Error: ", error);
    }
  };
};

export const createPost = (newPost: Post) => {

  return async (dispatch:AppDispatch) => {

    try {
      const response = await api.post("/posts",newPost);
      dispatch(addPost(response.data));
    }catch (error){
      console.log(error);
    }
  };
};