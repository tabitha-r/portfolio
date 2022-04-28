import React from 'react';

// Import media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopMobile, faWrenchSimple, faRectangleTerminal, faBracketsCurly } from '@fortawesome/pro-duotone-svg-icons';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

function FloatingIcons() {
    // Define array of all icons to avoud repetitive HTML elements
    const icons = [faRectangleTerminal, faJs, faLaptopMobile, faCss3, faCode, faReact, faBracketsCurly, faHtml5, faWrenchSimple];

    // Map above array to repeat FontAwesome elements
    return (
        <div className="floating-icons" aria-hidden>
            {icons.map((icon, index) => {
                return (
                    <FontAwesomeIcon 
                        icon={icon}
                        className='floating-icon'
                        key={`floatingicon-${index}`}
                    />
            )})}
        </div>
    )
};

export default FloatingIcons;