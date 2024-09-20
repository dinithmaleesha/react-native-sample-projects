import { createSlice } from "@reduxjs/toolkit";
import { getDucks } from "./userActions";

export interface UserState {
    isLoggedIn: boolean,
    loading: boolean,
    ducks: any
}

const initialState: UserState = {
    isLoggedIn: false,
    loading: false,
    ducks: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getDucks.fulfilled, (state, action) => {
                state.ducks = action.payload;
                state.loading = false;
            })
            .addCase(getDucks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDucks.rejected, (state) => {
                state.loading = false;
                state.ducks = {};
            });
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
