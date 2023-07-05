import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterStates } from '../../types';

const initialState: FilterStates = {
    search: '',
    employment: 'all',
    location: 'all',
    sort: 'latest',
    page: 1,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // Add search filters to the state and reset page back to 1

        setFilters(state, action: PayloadAction<FilterStates>) {
            state.search = action.payload.search;
            state.employment = action.payload.employment;
            state.location = action.payload.location;
            state.sort = action.payload.sort;
            state.page = 1;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
});

export const { setFilters, setPage } = searchSlice.actions;
export default searchSlice.reducer;
