import React from 'react';

// Import store
import { selectSortBy, setSortBy, useAppDispatch, useAppSelector } from '../../../store';

// Import components
import FilterCheckbox from './filterCheckbox';

function FilterControls() {
    // make store data and actions accessible
    const dispatch = useAppDispatch();

    const sort = useAppSelector(selectSortBy);

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
        <div className="filter-control-box">
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
            <div className="select-wrapper">
                <label htmlFor="selectSort">Sort by:</label>
                <select
                  id="selectSort"
                  name="sort"
                  onChange={(e) => dispatch(setSortBy(e.target.value))}
                  value={sort}
                >
                    <option value="tags">Categories</option>
                    <option value="nameaz">Names A-Z</option>
                    <option value="nameza">Names Z-A</option>
                    <option value="levelasc">Lowest Skill Level</option>
                    <option value="leveldesc">Highest Skill Level</option>
                </select>
            </div>
        </div>
        
    )
};

export default FilterControls;