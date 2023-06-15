import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showSidebar: false,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        toggleNavigation: (state) => {
            state.showSidebar = !state.showSidebar;
        },
    },
});

export const { toggleNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;
