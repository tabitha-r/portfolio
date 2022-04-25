import React from 'react';
import SkillCard from '../skillLevelCard';

export function AdvancedSkills() {

    return (
        <>
            <SkillCard
                shortName="Sass"
                fullName="Syntactically Awesome Style Sheets"
                link="https://sass-lang.com/"
                level={8}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                description="An advanced form of CSS."  
            />
            <SkillCard
                shortName="TypeScript"
                link="https://www.typescriptlang.org/"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                description="A superset of JavaScript with strict types." 
            />
            <SkillCard
                shortName="Handlebars"
                link="https://handlebarsjs.com/"
                level={6}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" 
                description="A web template system." 
            />
        </>
    )
};