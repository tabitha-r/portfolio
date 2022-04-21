import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faComment, faBriefcaseBlank, faSunBright, faMoonStars, faCopyright } from '@fortawesome/pro-duotone-svg-icons';

interface MenuProps {
    setMenu: Function;
    setDarkMode: Function;
    darkMode: boolean;
}

function MainMenu(props: MenuProps) {

    return (
        <div className="menu">

            <button className="menu-item" onClick={() => props.setMenu('socials')}>
                <FontAwesomeIcon icon={faComment} className="dropdown-icon" />
                <div className="dropdown-item-name">
                    Socials
                    <br />
                    <span className="dropdown-descriptor">
                        Social Media Connections
                    </span>
                </div>
                <FontAwesomeIcon icon={faCaretRight} className="dropdown-icon-right" />
            </button>

            <button className="menu-item" onClick={() => props.setMenu('legals')}>
                <FontAwesomeIcon icon={faBriefcaseBlank} className="dropdown-icon" />
                <div className="dropdown-item-name">
                    Legals
                    <br />
                    <span className="dropdown-descriptor">
                        Policies and Statements
                    </span>
                </div>
                <FontAwesomeIcon icon={faCaretRight} className="dropdown-icon-right" />
            </button>

            <button className="menu-item" onClick={() => props.setDarkMode(!props.darkMode)}>
                <FontAwesomeIcon icon={props.darkMode ? faSunBright : faMoonStars} className="dropdown-icon" />
                <div className="dropdown-item-name">
                    {props.darkMode ? 'Light' : 'Dark'} Mode
                    <br />
                    <span className="dropdown-descriptor">
                        Change colour scheme
                    </span>
                </div>
            </button>

            <div className='menu-item'>
                <FontAwesomeIcon icon={faCopyright} className="dropdown-icon" />
                <div className="dropdown-item-name">
                    Tabitha Riley 2022
                    <br />
                    <span className="dropdown-descriptor">
                        All Rights Reserved
                    </span>
                </div>
            </div>
            
        </div>

    )
};

export default MainMenu;