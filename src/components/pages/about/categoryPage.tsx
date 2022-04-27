import React, { useState } from 'react';
import SkillCardContainer from './skillCardContainer';
import FilterControls from './filterControls';

interface categoryProps {
    name: string,
    description: string,
    id: string,
    className?: string
}

function CategoryPage(props: categoryProps) {
    const [filter, setFilter] = useState(props.id);

    return (
        <div className={`category-section ${props.className}`}>
            <section>
                <h2>About</h2>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                {props.id === '' &&
                    <FilterControls filter={filter} setFilter={setFilter} />
                }
                <SkillCardContainer filter={filter} />
            </section>
        </div>
    )
};

export default CategoryPage;