import React, { useState } from 'react';


import ControlButtons from './controlButtons';
import UrlInput from './input';
import Dropdown from '../dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/pro-duotone-svg-icons';


function UrlBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="url-bar">
            <ControlButtons />
            <UrlInput />
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FontAwesomeIcon icon={dropdownOpen ? faBarsStaggered : faBars} fixedWidth />
            </button>
            {dropdownOpen &&
                <Dropdown />
            }
        </div>
    )
};

export default UrlBar;