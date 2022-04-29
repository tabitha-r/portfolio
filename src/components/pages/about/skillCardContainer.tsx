import React, { useEffect } from 'react';

//Import relevant store functions & types
import { selectSkills, useAppSelector } from '../../../store';
import type { SkillType } from '../../../store';

// Import card component
import SkillCard from './skillLevelCard';

// Define prop types
interface CardContainerProps {
    filter: string[],
    sort: string,
};

function SkillCardContainer(props: CardContainerProps) {
    const skills = useAppSelector(selectSkills);

    // Function to show only specific skills
    // Element in tags array of skill must match filter param to show
    function returnFilteredSkills(filter: string[], sort: string) {
        // Define a result array to push matching skills to
        let resultArr = [];
        
        // Goes through each individual skill object in skills object
        for (const [key, skill] of Object.entries(skills)) {

            // If tags match filter then skill is pushed to result array
            // Also should push skill if there is no filter (aka show all)
            if (skill.tags.some(item => filter.includes(item))) {
                resultArr.push(skill);
            };
        };

        // Checks for sort criteria, and modifies array as required
        // Default is by tag (original order)
        if (sort === 'nameaz') {
            resultArr.sort((a: SkillType, b:SkillType) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameB < nameA) {
                    return 1;
                }
                return 0;
            });
        } else if (sort === 'nameza') {
            resultArr.sort((a: SkillType, b:SkillType) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameB < nameA) {
                    return -1;
                }
                return 0;
            });
        } else if (sort === 'levelasc') {
            resultArr.sort((a: SkillType, b:SkillType) => a.level - b.level);
        } else if (sort === 'leveldesc') {
            resultArr.sort((a: SkillType, b:SkillType) => b.level - a.level);
        }
        
        // Result array of all matching skills returned, sorted by sort
        return resultArr;
    };

    return (
        <div className="card-container">
            {returnFilteredSkills(props.filter, props.sort).map((skill) => {
                return (
                    <SkillCard 
                        shortName={skill.name}
                        fullName={skill.fullName}
                        link={skill.link}
                        level={skill.level}
                        icon={skill.icon}
                        darkModeIcon={skill.darkModeIcon}
                        description={skill.description}
                        key={skill.id}
                    />
                )
            })}
        </div>
    )
};

export default SkillCardContainer;