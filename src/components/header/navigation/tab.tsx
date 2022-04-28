import React from 'react';
import { NavLink } from 'react-router-dom';

// Define prop types
interface TabProps {
    link: string;
    name: string;
    icon: any;
}

function BrowserTab(props: TabProps) {
    return (
        <NavLink 
            to={props.link} 
            className={({isActive}) => isActive ? "nav-tab active-tab" : "nav-tab"} 
            title={props.name}
        >
            {props.icon} <span>{props.name}</span>
        </NavLink>
    );
};

export default BrowserTab;