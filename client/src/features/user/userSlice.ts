import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types';

interface UserState {
    user: User | null;
    userLoading: boolean;
}

const initialState: UserState = {
    user: null,
    userLoading: true,
};

const getUser = createAsyncThunk('user/getUser', async () => {
    const response = await fetch('http://localhost:5000/api/v1/users/me', {
        credentials: 'include',
    });
    const data = await response.json();
    return data.user;
});

const deleteUser = createAsyncThunk('user/deleteUser', async () => {
    const response = await fetch('http://localhost:5000/api/v1/users/me', {
        method: 'DELETE',
        credentials: 'include',
    });
    const data = await response.json();
    return data.user;
});

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    const response = await fetch('http://localhost:5000/api/v1/logout', {
        credentials: 'include',
    });
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
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
                state.user = action.payload;
            });
    },
});

export { getUser, deleteUser, logoutUser };
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
