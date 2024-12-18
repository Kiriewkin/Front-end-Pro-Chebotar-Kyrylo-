import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todosReducer from "./slices/todoSlice"
import loginReducer from "./slices/loginSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todosReducer,
        login: loginReducer
    },
});