import React, { ReactNode, useContext } from 'react';
import { createContext, useState } from 'react';

export type Todo = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'High' | 'Low';
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id" | "completed">) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, updatedField: Omit<Todo, "id" | "completed">) => void;
  toggleComplete: (id: string) => void;
};

//create context

export const TodoContext = createContext<TodoContextType | null>(null);

//create provider

export const TodoProvider = ({ children }: { children: ReactNode }) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Omit<Todo, "id" | "completed">) => {
    const newTodo: Todo = {
      ...todo,//add all inputs here
      id: Date.now().toString(),
      completed: false,
    };
    setTodos(prev => [newTodo, ...prev]);//create new array. put new todo on top , then old
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id)); //filter the id that is not match and update the todos
  }

  const editTodo = (id: string, updatedField: Omit<Todo, "id" | "completed">) => {
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, ...updatedField } : todo)
    ); //copy ..todo and update the fields except id and completed
  };

  const toggleComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo => todo.id == id ? { ...todo, completed: !todo.completed } : todo)
    );
  }

  return (

    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>

  );

};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within TodoProvider");
  };
  return context;

};