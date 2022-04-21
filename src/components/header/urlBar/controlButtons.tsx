import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faHouseChimneyBlank, faArrowRotateRight } from '@fortawesome/pro-duotone-svg-icons';

function ControlButtons() {
    const navigate = useNavigate();

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