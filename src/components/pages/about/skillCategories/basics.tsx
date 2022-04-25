import React from 'react';
import SkillCard from '../skillLevelCard';

export function BasicSkills() {

    return (
        <>
            <SkillCard
                shortName="HTML"
                fullName="Hypertext Markup Language"
                link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                description="The building-block language for making web pages."  
            />
            <SkillCard
                shortName="CSS"
                fullName="Cascading Style Sheets"
                link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                description="The standard language for adding style and design to web pages."  
            />
            <SkillCard
                shortName="JavaScript"
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                description="The standard language for making web pages interactive." 
            />
        </>
    )
};