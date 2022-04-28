import React from 'react';

// Import components
import SkillCardContainer from './skillCardContainer';

// Define prop types
interface categoryProps {
    name: string,
    description: string,
    id: string,
    className?: string
}

function CategoryPage(props: categoryProps) {
    return (
        <div className={`category-section ${props.className}`}>
            <section>
                <h2>About</h2>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <SkillCardContainer filter={[props.id]} />
            </section>
        </div>
    )
};

export default CategoryPage;