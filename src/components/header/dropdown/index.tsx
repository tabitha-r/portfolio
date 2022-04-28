import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// Import relevant menus
import MainMenu from './mainMenu';
import LegalMenu from './legalsMenu';
import SocialMenu from './socialsMenu';

// Define prop types to include dropdown control
interface DropdownProps {
    dropdownOpen: boolean,
    setDropdownOpen: Function
}

function Dropdown(props: DropdownProps) {
    const [menu, setMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(330);

    // Change menu height for smooth transition
    function calcHeight(el: any) {
        switch (menu) {
            case 'main':
                setMenuHeight(330);
            break;
            case 'socials':
                setMenuHeight(260);
            break;
            case 'legals':
                setMenuHeight(410);
            break;

        }
    };

    return (
        <div 
            className={`dropdown-container menu--${menu}`}
            style={{ height: menuHeight }}
        >

            <CSSTransition
                in={menu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <MainMenu
                    setMenu={setMenu}
                />
                
            </CSSTransition>

            <CSSTransition
                in={menu === 'socials'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <SocialMenu setMenu={setMenu} setDropdownOpen={props.setDropdownOpen} />

            </CSSTransition>

            <CSSTransition
                in={menu === 'legals'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <LegalMenu setMenu={setMenu} setDropdownOpen={props.setDropdownOpen} />

            </CSSTransition>


        </div>
    )
};

export default Dropdown;