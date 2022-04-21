import React, { useState } from 'react';
import MenuItem from './menuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faBriefcaseBlank, faCaretRight, faSunBright, faMoonStars } from '@fortawesome/pro-duotone-svg-icons';

interface DropdownProps {
    darkMode: boolean;
    setDarkMode: Function;
}

function Dropdown(props: DropdownProps) {
    const [menu, setMenu] = useState('main');

    return (
        <div className="dropdown-container">
            <button className="menu-item" onClick={() => setMenu('socials')}>
                <FontAwesomeIcon icon={faComment} />
                Socials
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
            <button className="menu-item" onClick={() => setMenu('legals')}>
                <FontAwesomeIcon icon={faBriefcaseBlank} />
                Legal
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
            <button className="menu-item" onClick={() => props.setDarkMode(!props.darkMode)}>
                <FontAwesomeIcon icon={props.darkMode ? faSunBright : faMoonStars} /> 
                Set {props.darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    )
};

export default Dropdown;