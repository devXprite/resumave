import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from './slices/resumeSlice';

const store = configureStore({
    devTools: true,
    reducer: {
        resume: resumeSlice,
    },
});

export default store;
