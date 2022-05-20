// Import Redux slice creation function
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define state types
export interface Project {
    id: string,
    name: string,
    tech: string[],
    description: string,
    link: string,
    built: string,
    notableFeatures: string[],
    desktopPreview: string,
    mobilePreview: string,
}

interface Portfolio {
    projects: Project[],
}

// Import preview images
import {
    vaHomepageDesktop,
    vaHomepageMobile,
    clubSiteDesktop,
    clubSiteMobile,
    tarotDesktop,
    tarotMobile,
    lurkitDesktop,
    lurkitMobile
} from '../components/media/portfolio-examples';

// Set inital state for portfolio slice 
const initialState: Portfolio = {
    projects: [
        {
            name: 'Company Homepage',
            desktopPreview: vaHomepageDesktop,
            mobilePreview: vaHomepageMobile,
            tech: ['HTML', 'CSS', 'JavaScript'],
            description: 'A standard homepage for a fictional company, with multiple navigations.',
            notableFeatures: ['Responsive layout', 'Hamburger menu for mobile'],
            link: 'http://www.tabithariley.digital/va-homepage/',
            id: 'vaHompage',
            built: 'November 2021',
        },
        {
            name: 'Responsive Club Site',
            desktopPreview: clubSiteDesktop,
            mobilePreview: clubSiteMobile,
            tech: ['HTML', 'CSS', 'JavaScript'],
            description: 'A general page for a fictional club with a focus on being responsive.',
            notableFeatures: ['Responsive layout', 'Random quote generator'],
            link: 'http://www.tabithariley.digital/club-site/',
            id: 'clubSite',
            built: 'November 2021',
        },
        {
            name: 'Reddit Client',
            desktopPreview: lurkitDesktop,
            mobilePreview: lurkitMobile,
            tech: ['React', 'Redux', 'CSS-in-JS'],
            description: 'An app for browsing and pinning popular categories using the Reddit API.',
            notableFeatures: ['Live data from Reddit through the Reddit API', 'Animated logo on hover', 'Pinnable Subreddits', 'Dark Mode/Light Mode Toggle'],
            link: 'http://www.tabithariley.digital/lurkit/',
            id: 'lurkit',
            built: 'January 2022',
        },
        {
            name: 'Random Generator',
            desktopPreview: tarotDesktop,
            mobilePreview: tarotMobile,
            tech: ['HTML', 'CSS', 'JavaScript'],
            description: 'A random Tarot card reading generator.',
            notableFeatures: ['Randomly generated response', 'Handles user input'],
            link: 'http://www.tabithariley.digital/tarot/',
            id: 'tarot',
            built: 'October 2021',
        },
        {
            name: 'Portfolio Site',
            desktopPreview: '',
            mobilePreview: '',
            tech: ['HTML', 'CSS', 'JavaScript'],
            description: 'A portfolio site for a designer.',
            notableFeatures: ['Responsive layout', 'Navigation sliding in and out on hover'],
            link: '',
            id: 'portfolio',
            built: 'November 2021',
        }
    ],
};

// Create slice
export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {

    },
});

// Export all reducer actions individually


// Export selectors
export const selectProjects = (state: RootState) => state.portfolio.projects;

// Export reducer
export default portfolioSlice.reducer;