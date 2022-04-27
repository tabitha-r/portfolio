// Import the Redux configureStore
import { configureStore } from '@reduxjs/toolkit';

// Import relevant reducers
import colourSchemeReducer from './colourSchemeSlice';
import skillsReducer from './skillSlice';

// Configure store using imported reducers.
export const store = configureStore({
    reducer: {
        colourScheme: colourSchemeReducer,
        skills: skillsReducer,
    },
});

// Export TS types for current state and dispatch actions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
