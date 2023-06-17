import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserAPIResponse, DefaultAPIResponse } from '../../types';

interface UserState {
    user: User | null;
    userLoading: boolean;
}

const initialState: UserState = {
    user: null,
    userLoading: true,
};

const getUser = createAsyncThunk<UserAPIResponse>('user/getUser', async () => {
    const response = await fetch('http://localhost:5000/api/v1/users/me', {
        credentials: 'include',
    });
    return (await response.json()) as UserAPIResponse;
});

const deleteUser = createAsyncThunk('user/deleteUser', async () => {
    const response = await fetch('http://localhost:5000/api/v1/users/me', {
        method: 'DELETE',
        credentials: 'include',
    });
    return (await response.json()) as DefaultAPIResponse;
});

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    const response = await fetch('http://localhost:5000/api/v1/logout', {
        credentials: 'include',
    });
    return (await response.json()) as DefaultAPIResponse;
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

export { getUser, deleteUser, logoutUser };
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
