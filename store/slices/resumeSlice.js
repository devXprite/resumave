import { createSlice } from '@reduxjs/toolkit';

const defaultResume = {
    contact: {},
    education: [],
    experience: [],
    projects: [],
    skills: [],

    saved: false,
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

            state.saved = false;
        },

        addNewIndex: (state, action) => {
            const { tab, name, value } = action.payload;
            state[tab].push({});
            // state[tab].push({ [name]: [value] });
            state.saved = false;
        },

        deleteIndex: (state, action) => {
            const { index, tab } = action.payload;
            console.log('deleting', index, 'from', tab);
            state[tab].splice(index, 1);
            state.saved = false;
        },

        saveResume: state => {
            state.saved = true;
        },
    },
});

export const { updateResumeValue, addNewIndex, deleteIndex, saveResume } = resumeSlice.actions;
export default resumeSlice.reducer;
