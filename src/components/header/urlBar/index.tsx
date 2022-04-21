import React, { useState } from 'react';
import ControlButtons from './controlButtons';
import UrlInput from './input';
import Dropdown from '../dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/pro-duotone-svg-icons';

interface UrlProps {
    darkMode: boolean;
    setDarkMode: Function;
}

function UrlBar(props: UrlProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="url-bar">
            <ControlButtons />
            <UrlInput />
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FontAwesomeIcon icon={faEllipsis} fixedWidth />
            </button>
            {dropdownOpen &&
                <Dropdown darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
            }
        </div>
    )
};

export default UrlBar;