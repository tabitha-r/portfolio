import React from 'react';
import SkillCard from '../skillLevelCard';

export function SpaSkills() {

    return (
        <>
            <SkillCard
                shortName="React"
                fullName="ReactJS"
                link="https://reactjs.org/"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                description="The front-end JavaScript library made by Meta."  
            />
            <SkillCard
                shortName="Redux"
                link="https://redux.js.org/"
                level={8}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
                description="A library for managing state." 
            />
        </>
    )
};