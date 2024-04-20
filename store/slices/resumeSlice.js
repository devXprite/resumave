import { createSlice } from '@reduxjs/toolkit';

const defaultResume = {
    basic: {},
    education: [
        {
            degree: 'MCA',
        },
        {
            degree: 'BCA',
        },
        {
            degree: 'Inter',
        },
        {
            degree: 'HighSchool',
        },
    ],
    experience: [],
    projects: [],
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState: defaultResume,
    reducers: {
        updateResumeValue: (state, action) => {
            const { tab, name, value, index } = action.payload;
            if (index != null) {
                state[tab][index][name] = value;
            } else {
                state[tab][name] = value;
            }
        },

        addNewIndex: (state, action) => {
            const { tab, name, value } = action.payload;
            state[tab].push({ [name]: [value] });
        },

        deleteIndex: (state, action) => {
            const { index, tab } = action.payload;
            console.log('deleting', index, 'from', tab);
            state[tab].splice(index, 1);
        },
    },
});

export const { updateResumeValue, addNewIndex, deleteIndex } = resumeSlice.actions;
export default resumeSlice.reducer;
