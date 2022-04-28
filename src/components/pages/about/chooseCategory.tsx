import React from 'react';

// Define prop types
interface chooseProps {
    setCurrentPage: Function
};

function ChooseCategory(props: chooseProps) {
    // Set prop function to new function to use without props prefix
    const setCurrentPage = props.setCurrentPage;

    // Array of all the categories, being ['page identifier', 'display name']
    const pages = [
        ['default', 'Back'], 
        ['basics', 'Basics'],
        ['advanced', 'Advanced'],
        ['spa', 'Single Page App'],
        ['wordpress', 'WordPress'],
        ['backend', 'Back-End'],
        ['development', 'Development'],
        ['graphic', 'Graphic Design'],
        ['testing', 'Testing'],
        ['all', 'All']
    ];

    return (
        <div className="category-choice">
            {pages.map((page, index) => {
                return (
                        <button 
                            onClick={() => setCurrentPage(page[0])}
                            key={`categorybutton-${index}`} >
                            {page[1]}
                        </button>
                )
            })}
        </div>
    )
};

export default ChooseCategory;