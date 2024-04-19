import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const defaultResume = {};

const resumeSlice = createSlice({
    name: 'resume',
    initialState: defaultResume,
    reducers: {
        updateField: (state, action) => {
            const { section, name, value } = action.payload;
            state[section][name] = value;
        },

        updateIndexField: (state, action) => {
            const { section, index, name, value } = action.payload;
            state[section][index][name] = value;
        },
    },
});

export const { updateField, updateIndexField } = resumeSlice.actions;
export default resumeSlice.reducer;
