import React, { useState } from 'react';

// Import header elements
import ControlButtons from './controlButtons';
import UrlInput from './input';
import Dropdown from '../dropdown';

// Import necessary icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/pro-duotone-svg-icons';


function UrlBar() {
    // Set dropdown open state, true = open, false = closed
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="url-bar">
            <ControlButtons />
            <UrlInput />
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FontAwesomeIcon icon={dropdownOpen ? faBarsStaggered : faBars} fixedWidth />
            </button>
            {dropdownOpen &&
                <Dropdown dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
            }
        </div>
    )
};

export default UrlBar;