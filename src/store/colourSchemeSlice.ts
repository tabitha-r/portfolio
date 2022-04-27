// Import Redux slice creation function
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define state types
interface ColourScheme {
    darkMode: boolean,
    svgColours: {
        light: {
            skin: string,
            contrast: string,
            lightest: string,
            light: string,
            lightmid: string,
            darkmid: string,
            dark: string,
            darkest: string,
            secondarycontrast: string,
            background: string,
        },
        dark: {
            skin: string,
            contrast: string,
            lightest: string,
            light: string,
            lightmid: string,
            darkmid: string,
            dark: string,
            darkest: string,
            secondarycontrast: string,
            background: string,
        },
    },
};

// Set initial state for colour scheme slice
const initialState: ColourScheme = {
    darkMode: false,
    svgColours: {
        light: {
            skin: '#ffb6b6',
            contrast: '#f5a300',
            lightest: '#ffffff',
            light: '#f2f2f2',
            lightmid: '#e6e6e6',
            darkmid: '#cccccc',
            dark: '#3f3d56',
            darkest: '#2f2e41',
            secondarycontrast: '#008080',
            background: '#dde0e3',
        },
        dark: {
            skin: '#ffb6b6',
            contrast: '#ffaa00',
            lightest: '#5f5f72',
            light: '#434351',
            lightmid: '#3a3a45',
            darkmid: '#353540',
            dark: '#2c2c35',
            darkest: '#0e0e11',
            secondarycontrast: '#009999',
            background: '#212326',
        },
    },
};

// Create slice
export const colourSchemeSlice = createSlice({
    name: 'colourScheme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        setDarkMode: (state) => {
            state.darkMode = true;
        },
        setLightMode: (state) => {
            state.darkMode = false;
        }
    },
});

// Export all reducer actions individually
export const { toggleDarkMode, setDarkMode, setLightMode } = colourSchemeSlice.actions;

// Export selectors individually
export const selectDarkMode = (state: RootState) => state.colourScheme.darkMode;
export const selectSvgColours = (state: RootState) => state.colourScheme.svgColours;

// Export reducer
export default colourSchemeSlice.reducer;