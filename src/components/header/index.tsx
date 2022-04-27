import React from 'react';
import NavBar from './navigation';
import UrlBar from './urlBar';


function BrowserHeader() {

    return (
        <header>
            <NavBar />
            <UrlBar />
        </header>
    )
};

export default BrowserHeader;