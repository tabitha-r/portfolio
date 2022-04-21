import React from 'react';
import NavBar from './navigation';
import UrlBar from './urlBar';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: Function;
}

function BrowserHeader(props: HeaderProps) {

    return (
        <header>
            <NavBar />
            <UrlBar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
        </header>
    )
};

export default BrowserHeader;