import React from 'react';
import SkillCard from '../skillLevelCard';

export function DevelopmentSkills() {

    return (
        <>
            <SkillCard
                shortName="VS Code"
                fullName="Visual Studio Code"
                link="https://code.visualstudio.com/"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                description="A code editor, or IDE (integrated development environment)." 
            />
            <SkillCard
                shortName="Git"
                link="https://git-scm.com/"
                level={7}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                description="A version control system." 
            />
            <SkillCard
                shortName="GitHub"
                link="https://github.com/"
                level={6}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                description="Internet hosting for version control." 
            />
            <SkillCard
                shortName="Bash"
                fullName="GNU Bourne Again SHell"
                link="https://www.gnu.org/software/bash/"
                level={7}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" 
                description="A shell language used for controlling a computer." 
            />
            <SkillCard
                shortName="NPM"
                fullName="Node Package Manager"
                link="https://www.npmjs.com/"
                level={8}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" 
                description="A package manager for JavaScript." 
            />
            <SkillCard
                shortName="Markdown"
                link="https://en.wikipedia.org/wiki/Markdown"
                level={9}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" 
                description="A lightweight markup language commonly used for documentation." 
            />
        </>
    )
};