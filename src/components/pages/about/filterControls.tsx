import React from 'react';

interface filterProps {
    filter: string,
    setFilter: Function
}

function FilterControls(props: filterProps) {

    return (
        <div className="filter-controls">
            <p>Filter:</p>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'basics' ? props.setFilter('') : props.setFilter('basics')}
            >
                Basics
            </button>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'advanced' ? props.setFilter('') : props.setFilter('advanced')}
            >
                Advanced
            </button>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'spa' ? props.setFilter('') : props.setFilter('spa')}
            >
                Single Page Applications
            </button>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'wordpress' ? props.setFilter('') : props.setFilter('wordpress')}
            >
                Wordpress
            </button>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'backend' ? props.setFilter('') : props.setFilter('backend')}
            >
                Back-end
            </button>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'development' ? props.setFilter('') : props.setFilter('development')}
            >
                Development
            </button>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'graphic' ? props.setFilter('') : props.setFilter('graphic')}
            >
                Graphic Design
            </button>
            <button 
                className="filter-button" 
                onClick={() => props.filter === 'testing' ? props.setFilter('') : props.setFilter('testing')}
            >
                Testing
            </button>
        </div>
    )
};

export default FilterControls;