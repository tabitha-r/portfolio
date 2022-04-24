import React from 'react';
import SkillCard from './skillLevelCard';

export function About() {

    return (
        <main className="page about">
            <h2>About</h2>
            <div className="card-container">
                <SkillCard
                shortName="Bash"
                fullName="GNU Bourne Again SHell"
                link="https://www.gnu.org/software/bash/"
                level={7}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" 
                description="A shell language used for controlling a computer." />
                <SkillCard
                shortName="CSS"
                fullName="Cascading Style Sheets"
                link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                description="The standard language for adding style and design to web pages."  />
                <SkillCard
                shortName="HTML"
                fullName="Hypertext Markup Language"
                link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                description="The building-block language for making web pages."  />
                <SkillCard
                shortName="Bash"
                fullName="GNU Bourne Again SHell"
                link="https://www.gnu.org/software/bash/"
                level={7}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" 
                description="A shell language used for controlling a computer." />
                <SkillCard
                shortName="CSS"
                fullName="Cascading Style Sheets"
                link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                description="The standard language for adding style and design to web pages."  />
                <SkillCard
                shortName="HTML"
                fullName="Hypertext Markup Language"
                link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                description="The building-block language for making web pages."  />
            </div>
        </main>
    )
};