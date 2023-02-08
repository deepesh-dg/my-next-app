import { createSlice } from '@reduxjs/toolkit';
import { AuthStatusEnum } from '@/common';
import { RootState } from '../store';
import { login, signup } from './Actions';

export type AuthState = {
    accessToken?: string;
    refreshToken?: string;
    status: AuthStatusEnum;
};

const initialAuth: AuthState = {
    status: AuthStatusEnum.LOGGED_OUT,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuth,
    reducers: {
        logout: (state) => {
            state = { ...initialAuth };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = AuthStatusEnum.LOGGING_IN;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = action.payload.success ? AuthStatusEnum.LOGGED_IN : AuthStatusEnum.LOGGED_OUT;
                state.accessToken = action.payload.data?.access_token;
                state.refreshToken = action.payload.data?.refresh_token;
            })
            .addCase(login.rejected, (state) => {
                state.status = AuthStatusEnum.LOGGED_OUT;
            })
            .addCase(signup.pending, (state) => {
                state.status = AuthStatusEnum.LOGGING_IN;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = AuthStatusEnum.LOGGED_OUT;
            })
            .addCase(signup.rejected, (state) => {
                state.status = AuthStatusEnum.LOGGED_OUT;
            });
    },
});

export const authSelect = (state: RootState) => state.auth;
