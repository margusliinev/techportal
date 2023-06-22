import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { DefaultAPIResponse, User, UserAPIResponse } from '../../types';

interface UserState {
    user: User | null;
    userLoading: boolean;
}

const initialState: UserState = {
    user: null,
    userLoading: true,
};

const getUser = createAsyncThunk<UserAPIResponse>('user/getUser', async () => {
    const response = await fetch('https://techportal.onrender.com/api/v1/users/me', {
        credentials: 'include',
    });
    const data = response.json();
    return data;
});

const deleteUser = createAsyncThunk<DefaultAPIResponse>('user/deleteUser', async () => {
    const response = await fetch('https://techportal.onrender.com/api/v1/users/me', {
        method: 'DELETE',
        credentials: 'include',
    });
    const data = response.json();
    return data;
});

const logoutUser = createAsyncThunk<DefaultAPIResponse>('user/logoutUser', async () => {
    const response = await fetch('https://techportal.onrender.com/api/v1/logout', {
        credentials: 'include',
    });
    const data = response.json();
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload !== null) {
                state.user = action.payload as User;
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

export { deleteUser, getUser, logoutUser };
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
