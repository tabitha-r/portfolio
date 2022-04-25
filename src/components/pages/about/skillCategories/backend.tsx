import React from 'react';
import SkillCard from '../skillLevelCard';

export function BackendSkills() {

    return (
        <>
            <SkillCard
                shortName="Node"
                fullName="Node.js"
                link="https://nodejs.org/"
                level={3}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                description="A back-end JavaScript runtime environment that runs JavaScript outside a browser."  
            />
            <SkillCard
                shortName="Express"
                fullName="Express.js"
                link="https://expressjs.com/"
                level={1}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
                description="The standard server framework for Node.js." 
            />
            <SkillCard
                shortName="PostgreSQL"
                fullName="Postgre Structured Query Language"
                link="https://www.postgresql.org/"
                level={4}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                description="An object-relational database system." 
            />
            <SkillCard
                shortName="Firebase"
                link="https://firebase.google.com/"
                level={3}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                description="A platform for developing apps." 
            />
        </>
    )
};