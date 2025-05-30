import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces';

const initialState: AuthState = {
    status: 'checking',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = undefined;
        },
        logout: (state, action) => {
            state.status = 'not-authenticated';
            state.user = undefined;
            state.errorMessage = action.payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.errorMessage = undefined;
        },
        resetErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
    }
});

export const { login, logout, checkingCredentials, resetErrorMessage } = authSlice.actions;