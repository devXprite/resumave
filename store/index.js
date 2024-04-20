import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from './slices/resumeSlice';

const loadState = () => {
    console.info('Loading State from Local Storage...');

    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined;
        console.info('State Loaded Successfully from Local Storage');
        return JSON.parse(serializedState);
    } catch (err) {
        console.warn('Error Loading State from Local Storage');
        return undefined;
    }
};

const store = configureStore({
    devTools: true,
    preloadedState: loadState(),
    reducer: {
        resume: resumeSlice,
    },
});

function debounce(func, timeout = 2500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

const saveState = debounce(() => {
    console.info('Saving State to Local Storage...');
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

store.subscribe(saveState);

export default store;
