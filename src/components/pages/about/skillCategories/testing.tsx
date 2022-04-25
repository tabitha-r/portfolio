import React from 'react';
import SkillCard from '../skillLevelCard';

export function TestingSkills() {

    return (
        <>
            <SkillCard
                shortName="Jest"
                link="https://jestjs.io/"
                level={6}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                description="A testing framework for JavaScript."  
            />
            <SkillCard
                shortName="Mocha"
                link="https://mochajs.org/"
                level={6}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" 
                description="A testing framework for JavaScript." 
            />
        </>
    )
};