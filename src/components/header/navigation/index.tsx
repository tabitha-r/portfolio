import React from 'react';

// Import necessary components
import BrowserTab from './tab';

// Import media
import { Logo } from '../../media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouseChimney, faPaperPlane, faFaceSmileBeam, faBrowsers } from '@fortawesome/pro-duotone-svg-icons';

function NavBar() {

    return (
        <div className="browser-tabs">
            <Logo size='25' />
            <nav>
                <BrowserTab
                  link="/"
                  name="Home"
                  icon={<FontAwesomeIcon icon={faHouseChimney} fixedWidth />}
                />
                <BrowserTab
                  link="/about"
                  name="About"
                  icon={<FontAwesomeIcon icon={faFaceSmileBeam} fixedWidth />}
                />
                <BrowserTab
                  link="/portfolio"
                  name="Portfolio"
                  icon={<FontAwesomeIcon icon={faBrowsers} fixedWidth />}
                />
                <BrowserTab
                  link="/contact"
                  name="Contact"
                  icon={<FontAwesomeIcon icon={faPaperPlane} fixedWidth />}
                />
            </nav>
            <div className="browser-buttons" aria-hidden>
                <FontAwesomeIcon icon={faCircle} className="browser-button" />
                <FontAwesomeIcon icon={faCircle} className="browser-button" />
                <FontAwesomeIcon icon={faCircle} className="browser-button" />
            </div>
        </div>
    )
};

export default NavBar;