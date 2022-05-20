import React from 'react';
import { Link } from 'react-router-dom';

// Import media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faListCheck, faUserShield, faHandshakeAngle, faUniversalAccess } from '@fortawesome/pro-duotone-svg-icons';

// Define prop types
interface MenuProps {
    setMenu: Function,
    setDropdownOpen: Function
}

function LegalMenu(props: MenuProps) {

    // Array of all pages to map later
    // Saves repeating a lot of HTML
    const legalPages = [
        {
            name: 'Terms & Conditions',
            icon: faListCheck,
            link: '/legals/terms'
        },
        {
            name: 'Privacy Policy',
            icon: faUserShield,
            link: '/legals/privacy'
        },
        {
            name: 'Disclaimer',
            icon: faHandshakeAngle,
            link: '/legals/disclaimer'
        },
        {
            name: 'Accessibility Statement',
            icon: faUniversalAccess,
            link: '/legals/accessibility'
        },
    ]

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

            {legalPages.map((page, index) => {
                return (
                <Link to={page.link} key={`legalpage-${index}`}>
                    <button className="menu-item" onClick={() => props.setDropdownOpen(false)}>
                        <FontAwesomeIcon icon={page.icon} className="dropdown-icon" />
                            <div className='dropdown-item-name'>
                                {page.name}
                            </div>
                    </button>
                </Link>
            )})}
        </div>

    )
};

export default LegalMenu;