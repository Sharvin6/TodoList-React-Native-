import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";

interface TodoState {
  items: Todo[],
  count: number,
  loading1: boolean,
  loading2: boolean,
};

export type Todo = {
  id: string,
  title: string,
  completed: boolean,
};

const initialState: TodoState = {
  items: [],
  count: 0,
  loading1: false,
  loading2: false,
}; //when app starts [] 

//create slice
//createSlice create redux state, reducer functions, action creators
export const todoSlice = createSlice({
  name: "todos", //name of state section. Reduz look like this todos: []
  initialState,

  reducers: { //function that change the state

    startLoading: (state) => {
      state.loading1 = true;
    },

    ResetLoading: (state) => {
      state.loading2 = true;
    },

    increment: (state) => {
      state.count += 1,
        state.loading1 = false;
    },

    reset: (state) => {
      state.count = 0;
      state.loading2 = false;


    },
    //state: current todos array
    //action: the data sent from component
    //PayloadAction<string> ensure data inside is string only
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: uuidv4(),
        title: action.payload,
        completed: false
      });
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(t => t.id == action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      };
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },


  }
});

export const { ResetLoading, reset, startLoading, increment, addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer; //export reducer logic to store. store use this to update state

