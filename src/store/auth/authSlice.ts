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
        },
        logout: (state, action) => {
        },
        checkingCredentials: (state) => {
        },
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;