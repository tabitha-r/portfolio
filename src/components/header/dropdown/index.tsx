import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MainMenu from './mainMenu';
import LegalMenu from './legalsMenu';
import SocialMenu from './socialsMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faBriefcaseBlank, faCaretRight, faCaretLeft, faSunBright, faMoonStars } from '@fortawesome/pro-duotone-svg-icons';

interface DropdownProps {
    darkMode: boolean;
    setDarkMode: Function;
}

function Dropdown(props: DropdownProps) {
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
                    setDarkMode={props.setDarkMode}
                    darkMode={props.darkMode}
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