import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faHouseChimneyBlank, faArrowRotateRight } from '@fortawesome/pro-duotone-svg-icons';

function ControlButtons() {
    // Make navigate function accessible from hook
    const navigate = useNavigate();

    // Create four buttons to mimic browser back/forward/refresh/home buttons
    return (
        <div className="browser-control-buttons">
            <button 
                className="browser-control-button"
                onClick={() => navigate(-1)}
            >
                <FontAwesomeIcon icon={faAnglesLeft} fixedWidth />
            </button>
            <button 
                className="browser-control-button"
                onClick={() => navigate(1)}
            >
                <FontAwesomeIcon icon={faAnglesRight} fixedWidth />
            </button>
            <button 
                className="browser-control-button"
            >
                <FontAwesomeIcon icon={faArrowRotateRight} fixedWidth />
            </button>
            <button
                className="browser-control-button"
                onClick={() => navigate("/")}
            >
                <FontAwesomeIcon icon={faHouseChimneyBlank} fixedWidth />
            </button>
        </div>
    )
};

export default ControlButtons;