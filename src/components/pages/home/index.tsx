import React, { useState } from 'react';

// Import dark mode from store
import { selectDarkMode, useAppSelector } from '../../../store';

// Import components
import FloatingIcons from './floatingIcons';
import MainCta from './mainCta';
import { TextTrail } from '../../utility';

// Import media
import { Logo } from '../../media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/pro-duotone-svg-icons';

export function Home() {
    // Make dark mode boolean selectable
    const darkMode = useAppSelector(selectDarkMode);

    // Make state for text trail animation
    const [start, setStart] = useState(true);

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
                    <TextTrail>
                        <span>Hi! I'm</span>
                        <span className="title-name">Tabitha Riley</span>
                        <span>and I make websites</span>
                    </TextTrail>
                </h2>
            </section>

            <MainCta />

        </main>
    )
};