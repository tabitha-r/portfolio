import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/pro-duotone-svg-icons';

function NavBar() {

    return (
        <div className="browser-tabs">
            <img src={logo} className="nav-logo" aria-hidden />
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? "nav-tab active-tab" : "nav-tab"}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "nav-tab active-tab" : "nav-tab"}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "nav-tab active-tab" : "nav-tab"}>Contact</NavLink>
            </nav>
            <div className="browser-buttons" aria-hidden>
                <FontAwesomeIcon icon={faCircle} className="browser-button" />
                <FontAwesomeIcon icon={faCircle} className="browser-button" />
                <FontAwesomeIcon icon={faCircle} className="browser-button" />
            </div>
        </div>
    )
};

export default NavBar;