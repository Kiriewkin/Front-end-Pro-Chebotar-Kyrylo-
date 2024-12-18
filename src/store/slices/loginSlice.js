import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false
};

const loginSlice = createSlice ({
    name: "login",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logOut: (state) => {
            state.isAuth = false;
        }
    }
});

export const { login, logOut } = loginSlice.actions;
export default loginSlice.reducer;