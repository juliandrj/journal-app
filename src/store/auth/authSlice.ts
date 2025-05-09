import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces';

const initialState: AuthState = {
    status: 'not-authenticated',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.status = 'not-authenticated';
            state.user = undefined;
            state.errorMessage = action.payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;