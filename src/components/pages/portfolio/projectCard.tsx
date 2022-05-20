import React, { useState } from 'react';

// Define prop types
import type { Project } from '../../../store';

interface CardProps {
    project: Project,
}

// Import other media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faDisplay } from '@fortawesome/pro-duotone-svg-icons';

function ProjectCard(props: CardProps) {
    const [preview, setPreview] = useState('desktop');

    return (
        <div className="project-card">

            <img src={preview === 'mobile' ? props.project.mobilePreview : props.project.desktopPreview} alt={`${props.project.name} Preview`} className="preview-image" />

            <div className="project-info">
                <p>{props.project.built}</p>
                <h3>{props.project.name}</h3>
                <p>{props.project.description}</p>
                <a href={props.project.link} rel="noreferrer" target="_blank">Preview</a>
                <br />
                <button onClick={() => setPreview('desktop')}>
                    <FontAwesomeIcon icon={faDisplay} />
                </button>
                <button onClick={() => setPreview('mobile')}>
                    <FontAwesomeIcon icon={faMobileButton} />
                </button>
            </div>

            <div className="project-lists">
                <h4>Built With</h4>
                <ul>    
                    {props.project.tech.map((item, index) => {
                        return (
                            <li key={`${props.project.id}-tech-${index}`}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
                <h4>Notable Features:</h4>
                <ul>    
                    {props.project.notableFeatures.map((item, index) => {
                        return (
                            <li key={`${props.project.id}-features-${index}`}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
};

export default ProjectCard;