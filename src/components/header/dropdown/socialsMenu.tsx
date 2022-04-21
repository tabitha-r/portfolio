import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faArrowUpRightFromSquare } from '@fortawesome/pro-duotone-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface MenuProps {
    setMenu: Function;
}

function SocialMenu(props: MenuProps) {

    return (
        <div className="menu">
            <button 
                className="menu-item"
                onClick={() => props.setMenu('main')}
            >
                <FontAwesomeIcon icon={faCaretLeft} className="dropdown-icon" />
                <div className='dropdown-item-name'>
                    Go Back
                </div>
            </button>

            <a href="https://www.linkedin.com/in/tabitha-r-a27827214/" target="_blank" rel="noreferrer">
                <button className="menu-item">
                    <FontAwesomeIcon icon={faLinkedin} className="dropdown-icon" />
                        <div className='dropdown-item-name'>
                            LinkedIn
                        </div>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="dropdown-icon-right" title="Link will open in new tab" />
                </button>
            </a>

            <a href="https://github.com/tabitha-r" target="_blank" rel="noreferrer">
                <button className="menu-item">
                    <FontAwesomeIcon icon={faGithub} className="dropdown-icon" />
                        <div className='dropdown-item-name'>
                            GitHub
                        </div>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="dropdown-icon-right" title="Link will open in new tab" />
                </button>
            </a>
        </div>

    )
};

export default SocialMenu;