import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faListCheck, faUserShield, faHandshakeAngle, faUniversalAccess } from '@fortawesome/pro-duotone-svg-icons';

interface MenuProps {
    setMenu: Function;
}

function LegalMenu(props: MenuProps) {

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

            <Link to="/legals/terms">
                <button className="menu-item">
                    <FontAwesomeIcon icon={faListCheck} className="dropdown-icon" />
                        <div className='dropdown-item-name'>
                            Terms & Conditions
                        </div>
                </button>
            </Link>

            <Link to="/legals/privacy">
                <button className="menu-item">
                    <FontAwesomeIcon icon={faUserShield} className="dropdown-icon" />
                        <div className='dropdown-item-name'>
                            Privacy Policy
                        </div>
                </button>
            </Link>

            <Link to="/legals/disclaimer">
                <button className="menu-item">
                    <FontAwesomeIcon icon={faHandshakeAngle} className="dropdown-icon" />
                        <div className='dropdown-item-name'>
                            Disclaimer
                        </div>
                </button>
            </Link>

            <Link to="/legals/accessibility">
                <button className="menu-item">
                    <FontAwesomeIcon icon={faUniversalAccess} className="dropdown-icon" />
                        <div className='dropdown-item-name'>
                            Accessibility Statement
                        </div>
                </button>
            </Link>
        </div>

    )
};

export default LegalMenu;