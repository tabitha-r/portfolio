import React from 'react';
import SkillCard from './skillLevelCard';
import { GraphicDesignSkills, DevelopmentSkills, AdvancedSkills, BasicSkills, TestingSkills, BackendSkills, WordpressSkills, SpaSkills } from './skillCategories';

interface cardContainerProps {
    filter: string,
    setFilter?: Function
}

function SkillCardContainer(props: cardContainerProps) {

    return (
        <div className="card-container">
            {(props.filter === '' || props.filter === 'basics') &&
            <BasicSkills /> }
            {(props.filter === '' || props.filter === 'advanced') &&
            <AdvancedSkills /> }
            {(props.filter === '' || props.filter === 'spa') &&
            <SpaSkills /> }
            {(props.filter === '' || props.filter === 'wordpress') &&
            <WordpressSkills /> }
            {(props.filter === '' || props.filter === 'backend') &&
            <BackendSkills /> }
            {(props.filter === '' || props.filter === 'development') &&
            <DevelopmentSkills /> }
            {(props.filter === '' || props.filter === 'graphic') &&
            <GraphicDesignSkills /> }
            {(props.filter === '' || props.filter === 'testing') &&
            <TestingSkills /> }
        </div>
    )
};

export default SkillCardContainer;