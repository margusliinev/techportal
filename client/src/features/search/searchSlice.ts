import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterStates } from '../../types';

const initialState: FilterStates = {
    search: '',
    employment: 'all',
    location: 'all',
    sort: 'latest',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<FilterStates>) {
            state.search = action.payload.search;
            state.employment = action.payload.employment;
            state.location = action.payload.location;
            state.sort = action.payload.sort;
        },
    },
});

export const { setFilters } = searchSlice.actions;
export default searchSlice.reducer;
