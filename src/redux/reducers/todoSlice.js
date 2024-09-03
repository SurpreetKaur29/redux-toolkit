import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  user: {}
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.todos.unshift(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.email !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.email === action.payload.email)
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    getUser: (state, action) => {
      state.user = state.todos.find((todo) => todo.email === action.payload);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, getUser } = todoSlice.actions;

export default todoSlice.reducer;