import React, { useState } from 'react';

// Import store
import { selectFilter, selectSortBy, useAppSelector } from '../../../store';

// Import components
import SkillCardContainer from './skillCardContainer';
import FilterControls from './filterControls';

function FilterPage() {
    // make store data and actions accessible
    const filter = useAppSelector(selectFilter);
    const sort = useAppSelector(selectSortBy);

    // Make state for showing/hiding filter controls
    const [openControls, setOpenControls] = useState(false);

    return (
        <section className={`category-section filter-page ${openControls ? 'squished-box' : 'full-box'}`}>
            <h2>About</h2>
            <h3>All Skills</h3>
            <button onClick={() => setOpenControls(!openControls)}>
                {openControls ? 'Close' : 'Open'} Filter Settings
            </button>
            {openControls &&
                <FilterControls />
            }
            <SkillCardContainer filter={filter} sort={sort} />
        </section>
    )
};

export default FilterPage;