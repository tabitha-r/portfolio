import React from 'react';

// Import store
import { selectProjects, useAppSelector } from '../../../store';

// Import components
import ProjectCard from './projectCard';

export function Portfolio() {
    const projects = useAppSelector(selectProjects);

    return (
        <main className="page portfolio-page">
            <h2>Portfolio <span>{`=>`}</span></h2>
            <section className="project-cards-container">
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={`portfolio-${project.id}`}
                            project={project}
                        />
                    )
                })}
            </section>
        </main>
    )
};