import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    showSidebar: false,
    theme: localStorage.getItem('theme') || 'dark-theme',
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        toggleNavigation: (state) => {
            state.showSidebar = !state.showSidebar;
        },
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
});

export const { toggleNavigation, setTheme } = navigationSlice.actions;
export default navigationSlice.reducer;
