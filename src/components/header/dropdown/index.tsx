import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MainMenu from './mainMenu';
import LegalMenu from './legalsMenu';
import SocialMenu from './socialsMenu';

function Dropdown() {
    const [menu, setMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(330);

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
    }

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
                <SocialMenu setMenu={setMenu} />

            </CSSTransition>

            <CSSTransition
                in={menu === 'legals'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <LegalMenu setMenu={setMenu} />

            </CSSTransition>


        </div>
    )
};

export default Dropdown;