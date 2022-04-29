import React, { useState } from 'react';

// Import dark mode checking
import { selectDarkMode, useAppSelector } from '../../../store';

// Import fade in React Spring effect
import { FadeIn } from '../../utility';

// Import media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCode, faPaintbrushPencil, faBadge, faArrowUpRightFromSquare } from '@fortawesome/pro-duotone-svg-icons';

// Define components props types
interface CardProps {
    shortName: string,
    fullName?: string,
    link: string,
    level: number,
    icon?: string,
    darkModeIcon?: boolean,
    type?: 'design' | 'code' | 'other',
    description?: string,
    key?: number
}

function SkillCard(props: CardProps) {
    // Make dark mode accessible
    const darkMode = useAppSelector(selectDarkMode);

    // Create state for card hovering to show description
    const [hover, setHover] = useState(false);

    // Determine which icon should be shown
    // Sets to generic icon if one is not provided but
    // requires a 'type' prop to be passed, otherwise nothing shown
    const icon = () => {
        if (!props.icon && props.type === 'design') {
            return <FontAwesomeIcon icon={faPaintbrushPencil} aria-hidden className="dev-icon" />
        } else if (!props.icon && props.type === 'code') {
            return <FontAwesomeIcon icon={faCode} aria-hidden className="dev-icon" />
        } else if (!props.icon && props.type === 'other') {
            return <FontAwesomeIcon icon={faBadge} aria-hidden className="dev-icon" />
        } else if (props.icon) {
            return <img src={props.icon} alt={`${props.shortName} icon`} className={darkMode ? (props.darkModeIcon ? "dev-icon icon-darkmode" : "dev-icon" ) : "dev-icon"} />
        } else {
            return null;
        }
    };

    // Function to display level on meter out of ten
    // Level is number <= 10
    const displayLevel = (level: number) => {
        // Define a result array for pushing levels of the meter to
        let levelIndicator = [];

        // Iterates 10 times, for each level of the meter
        for (let i = 1; i <= 10; i++) {
            // Checks if the skill level is still equal to current meter level
            if (i <= level) {
                // If true, meter level square is filled
                levelIndicator.push(<FontAwesomeIcon key={i} icon={faSquare} aria-hidden className="level-indicator filled" />);
            } else {
                // If false, meter level square is not filled
                levelIndicator.push(<FontAwesomeIcon key={i} icon={faSquare} aria-hidden className="level-indicator" />);
            }
        }

        // Returns resulting array of 10 squares filled up to skill level
        return levelIndicator;
    };
        
        
        return (
            <div
              className="skill-card"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
                {icon()}
                <div className="skill-details">
                    <h4 title={props.fullName}>{props.shortName}</h4>
                    <div className="skill-level">
                        {displayLevel(props.level)}
                    </div>
                    <a
                      href={props.link}
                      rel="noreferrer"
                      target="_blank"
                      onMouseEnter={() => setHover(false)}
                      onMouseLeave={() => setHover(true)} 
                    >
                          About <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden />
                    </a>
                </div>
                {hover &&
                    <FadeIn
                      className="skill-description-tooltip"
                      fadeDistance={24} >
                        {props.description}
                    </FadeIn>
                }
            </div>
    )
};

export default SkillCard;