import React from 'react';

// Import media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faArrowUpRightFromSquare } from '@fortawesome/pro-duotone-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Define prop types
interface MenuProps {
    setMenu: Function,
    setDropdownOpen: Function
}

function SocialMenu(props: MenuProps) {

    // Array of all social media links to map later
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: faLinkedin,
            link: 'https://www.linkedin.com/in/tabitha-r-a27827214/'
        },
        {
            name: 'GitHub',
            icon: faGithub,
            link: 'https://github.com/tabitha-r'
        },
    ];

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

            {socialLinks.map((link, index) => {
                return (
                    <a href={link.link} target="_blank" rel="noreferrer" key={`sociallink-${index}`}>
                        <button className="menu-item" onClick={() => props.setDropdownOpen(false)}>
                            <FontAwesomeIcon icon={link.icon} className="dropdown-icon" />
                                <div className='dropdown-item-name'>
                                    {link.name}
                                </div>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="dropdown-icon-right" title="Link will open in new tab" />
                        </button>
                    </a>
            )})}
        </div>
    )
};

export default SocialMenu;