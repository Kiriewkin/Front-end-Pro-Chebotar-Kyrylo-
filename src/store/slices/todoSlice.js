import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../thunk/todoThunk";

const initialState = {
  todos: [],
  loading: false,
  error: '',
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleTodoFromLocal: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
          todo.completed = !todo.completed;
      }
    },
    editTodoFromLocal:(state,action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { toggleTodoFromLocal, editTodoFromLocal } = todoSlice.actions
export default todoSlice.reducer;
