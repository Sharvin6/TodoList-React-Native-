import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../CreateSlice/todoSlice";
import Reactotron from '../../../ReactotronConfig';
import postReducer from "../CreateSlice/postSlice";
import { postApi } from "../../services/postApi";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    post: postReducer,
    [postApi.reducerPath]: postApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),

  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(Reactotron.createEnhancer())
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//RootState: tells u where its located in store.
//AppDispatch: carries the action to store
//Reducer: decides all the actions. Main logics


