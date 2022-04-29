import React from 'react';

// Import store
import { selectFilter, selectSortBy, setSortBy, useAppDispatch, useAppSelector } from '../../../store';

// Import components
import SkillCardContainer from './skillCardContainer';
import FilterCheckbox from './filterCheckbox';

function FilterControls() {
    const filter = useAppSelector(selectFilter);
    const sort = useAppSelector(selectSortBy);
    const dispatch = useAppDispatch();

    // Array of all available filters to choose from
    // These match the tags in the skillSlice of the store
    // Each element is ['tag', 'display name']
    const filters = [
        ['standard', 'Basics'], 
        ['advanced', 'Advanced'], 
        ['frontend', 'Front-End'], 
        ['backend', 'Back-End'], 
        ['design', 'Web Design'], 
        ['graphics', 'Graphic Design'],
        ['interactivity', 'Interactivity'], 
        ['spa', 'Single Page App'],
        ['data', 'Data Management'],
        ['wordpress', 'WordPress'],
        ['development', 'Development'],
        ['app', 'Apps & Programs'],
        ['vc', 'Version Control'],
        ['documentation', 'Documentation'],
        ['testing', 'Testing'],
    ];

    return (
        <section className="category-section">
            <h2>About</h2>
            <h3>All Skills</h3>
            <h4>Filter:</h4>
            <div className="filter-controls">
                {filters.map((tag, index) => {
                    return (
                    <FilterCheckbox 
                        id={tag[0]}
                        name={tag[1]}
                        key={`filterbutton-${index}`}
                    />
                )})}
            </div>
            <label htmlFor="selectSort">Sort by:</label>
            <select id="selectSort" name="sort" onChange={(e) => dispatch(setSortBy(e.target.value))}>
                <option value="tags">Categories</option>
                <option value="nameaz">Names A-Z</option>
                <option value="nameza">Names Z-A</option>
                <option value="levelasc">Lowest Skill Level</option>
                <option value="leveldesc">Highest Skill Level</option>
            </select>
            <SkillCardContainer filter={filter} sort={sort} />
        </section>
        
    )
};

export default FilterControls;