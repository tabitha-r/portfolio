import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCode, faPaintbrushPencil, faBadge } from '@fortawesome/pro-duotone-svg-icons';

interface CardProps {
    shortName: string,
    fullName?: string,
    link: string,
    level: number,
    icon?: string,
    type?: 'design' | 'code' | 'other',
    description?: string
}

function SkillCard(props: CardProps) {
    const [hover, setHover] = useState(false);

    const icon = () => {
        if (!props.icon && props.type === 'design') {
            return <FontAwesomeIcon icon={faPaintbrushPencil} aria-hidden className="dev-icon" />
        } else if (!props.icon && props.type === 'code') {
            return <FontAwesomeIcon icon={faCode} aria-hidden className="dev-icon" />
        } else if (!props.icon && props.type === 'other') {
            return <FontAwesomeIcon icon={faBadge} aria-hidden className="dev-icon" />
        } else if (props.icon) {
            return <img src={props.icon} alt={`${props.shortName} icon`} className="dev-icon" />
        } else {
            return null;
        }
    };

    const displayLevel = (level: number) => {
        let levelIndicator = [];

        for (let i = 1; i <= 10; i++) {
            if (i <= level) {
                levelIndicator.push(<FontAwesomeIcon icon={faSquare} aria-hidden className="level-indicator filled" />);
            } else {
                levelIndicator.push(<FontAwesomeIcon icon={faSquare} aria-hidden className="level-indicator" />);
            }
        }

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
                    <a href={props.link} rel="noreferrer" target="_blank">More info</a>
                </div>
                {hover &&
                    <div className="skill-description-tooltip">
                        {props.description}
                    </div>
                }
            </div>
    )
};

export default SkillCard;