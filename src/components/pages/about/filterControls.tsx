import React from 'react';

interface filterProps {
    filter: string,
    setFilter: Function
}

function FilterControls(props: filterProps) {
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

    return (
        <div className="filter-controls">
            <p>Filter:</p>
            {filters.map((filter, index) => {
                return (
                <div className="filter-checkbox">
                    <input
                        type="checkbox" 
                        id={filter[0]}
                        name={filter[0]}
                        className="filter-checkbox" 
                        onClick={() => props.filter === filter[0] ? props.setFilter('') : props.setFilter(filter[0])}
                        key={`filter-${index}`}
                    />
                        <label htmlFor={filter[0]}>{filter[1]}</label>
                </div>
            )})}
        </div>
    )
};

export default FilterControls;