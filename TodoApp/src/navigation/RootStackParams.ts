import { Todo } from "../context/TodoContext";
import { Post } from "../services/postApi";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Overview: undefined;
  TODO: { todo?: Todo };
  Hooks: undefined;
  useReducer: undefined;
  Redux: undefined;
  Practice: undefined;
  Axios: undefined;
  AxiosThunk: undefined;
  RTKQuery: undefined;
  TempResult: { tempData: Post };
  PostScreen: undefined;


};