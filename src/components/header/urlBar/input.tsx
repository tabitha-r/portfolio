import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faArrowRight } from '@fortawesome/pro-duotone-svg-icons';

function UrlInput() {
    const location = useLocation();
    const navigate = useNavigate();
    const page = location.pathname;
    const [newPath, setNewPath] = useState('');

    const handleSubmit = () => {
        let pathString = '';

        if (newPath.startsWith('/')) {
            pathString = newPath.toLowerCase();
        } else {
            pathString = `/${newPath}`.toLowerCase();
        }

        if (pathString === '/home') {
            navigate('/');
            setNewPath('');
        } else {
            navigate(pathString);
            setNewPath('');
        }
    }

    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="faux-url">
            <FontAwesomeIcon icon={faLock} />
            <p aria-hidden>|</p>
            <div className="url">
                <p aria-hidden>https://www.</p>
                <h1 className='site-title'>Tabitha Riley</h1>
                <p aria-hidden>.co.uk</p>
                <input type="text" placeholder={page} value={newPath} onChange={(e) => setNewPath(e.target.value)} onKeyPress={(e) => handleEnter(e)}/>
            </div>
            <div className='url-end'>
                <span aria-hidden>|</span>
                <button onClick={() => handleSubmit()}>
                     <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
};

export default UrlInput;