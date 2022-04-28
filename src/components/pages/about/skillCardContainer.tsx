import React, { useEffect } from 'react';

//Import relevant store functions
import { selectSkills, useAppSelector } from '../../../store';

// Import card component
import SkillCard from './skillLevelCard';

// Define prop types
interface CardContainerProps {
    filter: string[]
};

function SkillCardContainer(props: CardContainerProps) {
    const skills = useAppSelector(selectSkills);

    // Function to show only specific skills
    // Element in tags array of skill must match filter param to show
    function returnFilteredSkills(filter: string[]) {
        // Define a result array to push matching skills to
        let resultArr = [];
        
        // Goes through each individual skill object in skills object
        for (const [key, skill] of Object.entries(skills)) {

            // If tags match filter then skill is pushed to result array
            // Also should push skill if there is no filter (aka show all)
            if (skill.tags.some(item => filter.includes(item)) || !filter) {
                resultArr.push(skill);
            };
        };

        // Result array of all matching skills returned
        return resultArr;
    };

    return (
        <div className="card-container">
            {returnFilteredSkills(props.filter).map((skill) => {
                return (
                    <SkillCard 
                        shortName={skill.name}
                        fullName={skill.fullName}
                        link={skill.link}
                        level={skill.level}
                        icon={skill.icon}
                        description={skill.description}
                        key={skill.id}
                    />
                )
            })}
        </div>
    )
};

export default SkillCardContainer;