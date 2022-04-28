import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMonocle, faPersonToPortal } from '@fortawesome/pro-duotone-svg-icons';

export function NotFound() {
    // Make location and navigate functions available from hooks
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <main className="page not-found">
            <section>
                <FontAwesomeIcon icon={faFaceMonocle} />
                <h2 title="Error 404: Content Not Found">Uh Oh!</h2>
                <p>Whoops! We couldn't find anything at <em>www.tabithariley.co.uk{location.pathname}</em></p>
                <button onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faPersonToPortal} flip="horizontal" swapOpacity />
                    Go Back
                </button>
            </section>
        </main>
    )
};