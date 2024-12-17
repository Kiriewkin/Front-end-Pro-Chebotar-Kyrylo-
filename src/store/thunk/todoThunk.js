import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

        if (!response.ok) {
            throw new Error('Failed to fetch todo');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message || 'Failed to fetch todo');
    }
});

export const addTodo = createAsyncThunk('todo/addTodo', async (newTodo, { rejectWithValue }) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            throw new Error('Failed to post todo');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message || 'Ошибка при добавлении задачи');
    }
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (todoId, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete todo');
        }

        return todoId;
    } catch (e) {
        return rejectWithValue(e.message || 'Failed to delete todo');
    }
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async (updatedTodo, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTodo)
        });

        if (!response.ok) {
            throw new Error('Failed to update todo status');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message || 'Failed to update todo status');
    }
});
