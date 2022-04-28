import React, { useState } from 'react';
import SkillCardContainer from './skillCardContainer';

function FilterControls() {
    const [selectedFilters, setSelectedFilters] = useState(['']);

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
        ['testing', 'Testing']
    ];

    const handleSelection = (tag: string) => {
        let newFilters: string[] = [];

        if (selectedFilters[0] !== '') {
            newFilters = selectedFilters;
        };

        if (newFilters.includes(tag)) {
            newFilters = newFilters.filter((value) => {
                return value !== tag
            });
        } else {
            newFilters.push(tag);
        };

        setSelectedFilters(newFilters);
    };

    return (
        <div className="category-section">
            <div className="filter-controls">
                <p>Filter:</p>
                {filters.map((filter, index) => {
                    return (
                    <div className="filter-checkbox" 
                    key={`filterbutton-${index}`}>
                        <input
                            type="checkbox" 
                            id={filter[0]}
                            name={filter[0]}
                            className="filter-checkbox" 
                            onClick={() => handleSelection(filter[0])}
                        />
                            <label htmlFor={filter[0]}>{filter[1]}</label>
                    </div>
                )})}
            </div>
            <section>
                <SkillCardContainer filter={selectedFilters} />
            </section>
        </div>
        
    )
};

export default FilterControls;