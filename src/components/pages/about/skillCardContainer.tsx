import React from 'react';

//Import relevant store functions
import { selectSkills } from '../../../store/skillSlice';
import { useAppSelector } from '../../../store/hooks';

import SkillCard from './skillLevelCard';
interface cardContainerProps {
    filter: string
}

function SkillCardContainer(props: cardContainerProps) {
    const skills = useAppSelector(selectSkills);

    function returnFilteredSkills(filter: string) {
        let resultArr = [];
        for (const [key, skill] of Object.entries(skills)) {
            if (skill.tags.includes(filter) || !filter) {
                resultArr.push(
                    <SkillCard 
                        shortName={skill.name}
                        fullName={skill.fullName}
                        link={skill.link}
                        level={skill.level}
                        icon={skill.icon}
                        description={skill.description}
                        id={skill.id}
                    />
                );
            };
        };
        return resultArr;
    };

    return (
        <div className="card-container">
            {returnFilteredSkills(props.filter)}
        </div>
    )
};

export default SkillCardContainer;