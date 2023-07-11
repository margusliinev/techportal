import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultAPIResponse, User, UserAPIResponse } from '../../types';

interface UserState {
    user: User | null;
    userLoading: boolean;
}

const initialState: UserState = {
    user: null,
    userLoading: true,
};

// Get user info and set it to state

const getUser = createAsyncThunk<UserAPIResponse>('user/getUser', async () => {
    const response = await fetch('/api/v1/users/me', {
        method: 'GET',
    });
    const data = response.json();
    return data;
});

// Remove user from state, delete user from database and reset token

const deleteUser = createAsyncThunk<DefaultAPIResponse>('user/deleteUser', async () => {
    const response = await fetch('/api/v1/users/me', {
        method: 'DELETE',
    });
    const data = response.json();
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            if (action.payload !== null) {
                state.user = action.payload;
            } else {
                state.user = null;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.userLoading = true;
            })
            .addCase(getUser.rejected, (state) => {
                state.userLoading = false;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.userLoading = false;
                state.user = action.payload.user;
            });
    },
});

export { deleteUser, getUser };
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
