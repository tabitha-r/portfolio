import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faArrowRight } from '@fortawesome/pro-duotone-svg-icons';

function UrlInput() {
    // Make location and navigation functions available from hook
    const location = useLocation();
    const navigate = useNavigate();

    // Set current page to current url ending '/...'
    const page = location.pathname;

    // State for new path to navigate to from fake URL bar
    const [newPath, setNewPath] = useState('');

    // Function to handle new path being entered into fake URL bar
    const handleSubmit = () => {
        // Mutable string to be fixed and set as new path
        let pathString = '';

        // Checks if the user put / before their new path in the input
        // If one was not added then one is added in the else clause
        // New path is also made lowercase in all instances for easier navigation matching
        if (newPath.startsWith('/')) {
            pathString = newPath.toLowerCase();
        } else {
            pathString = `/${newPath}`.toLowerCase();
        }

        // Checks if the user put home as path
        // This is because 'home' would not be recognised
        // The 'home' path is '/'
        // Then user is navigated to their new path
        // newPath state is then set to blank to clear the input bar
        if (pathString === '/home') {
            navigate('/');
            setNewPath('');
        } else {
            navigate(pathString);
            setNewPath('');
        }
    }

    // Function to check whether someone submits path using enter onKeyPress
    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            // If true they pressed enter, then the above handleSubmit function is called
            handleSubmit();
        }
    }

    return (
        <div className="faux-url">
            <FontAwesomeIcon icon={faLock} />
            <p aria-hidden>|</p>
            <div className="url">
                {/* The below formats the fake url to look like a url, using css, while still keeping H1 element */}
                <p aria-hidden>https://www.</p>
                <h1 className='site-title'>Tabitha Riley</h1>
                <p aria-hidden>.co.uk</p>
                <input type="text" placeholder={page} value={newPath} onChange={(e) => setNewPath(e.target.value)} onKeyPress={(e) => handleEnter(e)}/>
            </div>
            <div className='url-end'>
                <span aria-hidden>|</span>
                <button onClick={() => handleSubmit()}>
                     <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
};

export default UrlInput;