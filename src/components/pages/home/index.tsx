import React from 'react';

// Import dark mode from store
import { selectDarkMode, useAppSelector } from '../../../store';

// Import components
import FloatingIcons from './floatingIcons';
import MainCta from './mainCta';

// Import media
import { Logo } from '../../media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/pro-duotone-svg-icons';

export function Home() {
    // Make dark mode boolean selectable
    const darkMode = useAppSelector(selectDarkMode);

    return (
        <main className="page home">
            <div className="top-bar">
                <p>You can change to {darkMode ? 'light' : 'dark'} mode in this menu!</p>
                <FontAwesomeIcon 
                    icon={faArrowTurnUp}
                    className="identify-menu"
                />
            </div>
            
            <FloatingIcons />
            <section className="hero">
                <Logo className="logo" gradient />
                <h2>
                    Hi! I'm
                    <br />
                    <span className="title-name">Tabitha Riley</span>
                    <br />
                    and I make websites
                </h2>
            </section>

            <MainCta />

        </main>
    )
};