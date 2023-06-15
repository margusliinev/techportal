import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import userReducer from './features/user/userSlice';
import navigationReducer from './features/navigation/navigationSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        navigation: navigationReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
