import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './features/api/apiSlice';
import navigationReducer from './features/navigation/navigationSlice';
import searchReducer from './features/search/searchSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        navigation: navigationReducer,
        search: searchReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
