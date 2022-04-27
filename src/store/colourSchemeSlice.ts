// Import Redux slice creation function
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define state types
interface ColourScheme {
    darkMode: boolean,
}

// Set initial state for colour scheme slice
const initialState: ColourScheme = {
    darkMode: false
}

// Create slice
export const colourSchemeSlice = createSlice({
    name: 'colourScheme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

// Export all reducer actions individually
export const { toggleDarkMode } = colourSchemeSlice.actions;

// Export selectors individually
export const selectDarkMode = (state: RootState) => state.colourScheme.darkMode;

// Export reducer
export default colourSchemeSlice.reducer;