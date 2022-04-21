import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopMobile, faWrenchSimple, faRectangleTerminal, faBracketsCurly } from '@fortawesome/pro-duotone-svg-icons';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

function FloatingIcons() {

    return (
        <div className="floating-icons" aria-hidden>
            <FontAwesomeIcon 
                icon={faRectangleTerminal}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faJs}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faLaptopMobile}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faCss3}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faCode}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faReact}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faBracketsCurly}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faHtml5}
                className='floating-icon'
            />
            <FontAwesomeIcon 
                icon={faWrenchSimple}
                className='floating-icon'
            />
        </div>
    )
};

export default FloatingIcons;