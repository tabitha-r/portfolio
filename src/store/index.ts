// Export all used store related functions/variables here for easy import

// Export store
export { store } from './store';

// Export required hooks
export { useAppSelector, useAppDispatch } from './hooks';

// Export colour scheme selectors and actions
export { 
    toggleDarkMode, 
    setDarkMode, 
    setLightMode,
    selectDarkMode, 
    selectSvgColours } from './colourSchemeSlice';

// Export skill selectors and actions
export {
    selectSkills,
    selectFilter,
    selectSortBy,
    addFilter,
    setFilter,
    setSortBy,
} from './skillSlice';

// Export portfolio selectors and actions
export {
    selectProjects
} from './portfolioSlice';

// Export types
export type { SkillType } from './skillSlice';
export type { Project } from './portfolioSlice';