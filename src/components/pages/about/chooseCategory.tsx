import React from 'react';

interface chooseProps {
    setCurrentPage: Function
};

function ChooseCategory(props: chooseProps) {
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
                    <>
                        <button 
                            onClick={() => setCurrentPage(page[0])}
                            key={index} >
                            {page[1]}
                        </button>
                        <br />
                    </>
                )
            })}
        </div>
    )
};

export default ChooseCategory;