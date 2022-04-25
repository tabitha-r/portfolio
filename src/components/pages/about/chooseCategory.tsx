import React from 'react';

interface chooseProps {
    setCurrentPage: Function
};

function ChooseCategory(props: chooseProps) {
    const setCurrentPage = props.setCurrentPage;

    return (
        <div className="category-choice">
            <button onClick={() => setCurrentPage('default')}>Back</button>
            <br />
            <button onClick={() => setCurrentPage('basics')}>Basics</button>
            <br />
            <button onClick={() => setCurrentPage('advanced')}>Advanced</button>
            <br />
            <button onClick={() => setCurrentPage('spa')}>Single Page App</button>
            <br />
            <button onClick={() => setCurrentPage('wordpress')}>Wordpress</button>
            <br />
            <button onClick={() => setCurrentPage('backend')}>Back-End</button>
            <br />
            <button onClick={() => setCurrentPage('development')}>Development</button>
            <br />
            <button onClick={() => setCurrentPage('graphic')}>Graphic Design</button>
            <br />
            <button onClick={() => setCurrentPage('testing')}>Testing</button>
            <br />
            <button onClick={() => setCurrentPage('all')}>All</button>
        </div>
    )
};

export default ChooseCategory;