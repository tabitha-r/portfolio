import React, { useState } from 'react';

// Import components
import CategoryPage from './categoryPage';
import GeneralAbout from './generalAbout';
import ChooseCategory from './chooseCategory';
import FilterControls from './filterControls';
import Background from './background';

export function About() {
    // Set state for current 'page' to show
    const [currentPage, setCurrentPage] = useState('default');

    // Uses react transition group CSSTransitions to display different 'page' within the about page
    return (
        <main className="page about">
            <ChooseCategory setCurrentPage={setCurrentPage} />

            <div className="about-carousel">
                { currentPage === 'default' &&
                <GeneralAbout />}

                { currentPage === 'basics' &&
                <CategoryPage
                  name="Web Development Basics"
                  id='standard'
                  description="The golden trio of core building blocks of the web." 
                  className="about-basics" />}

                { currentPage === 'advanced' &&
                <CategoryPage
                  name="Levelling Up Websites"
                  id='advanced'
                  description="Taking the core technologies up a notch." 
                  className="about-advanced" />}

                { currentPage === 'spa' &&
                <CategoryPage
                  name="Single Page Applications"
                  id='spa'
                  description="Modern web at its finest." 
                  className="about-spa" />}

                { currentPage === 'wordpress' &&
                <CategoryPage
                  name="Wordpress Development"
                  id='wordpress'
                  description="The languages and technologies used by 43% of the web." 
                  className="about-wordpress" />}

                { currentPage === 'backend' &&
                <CategoryPage
                  name="Under the Hood"
                  id='backend'
                  description="Technologies used behind the scenes." 
                  className="about-backend" />}

                { currentPage === 'development' &&
                <CategoryPage
                  name="Web Development Toolkit"
                  id='development'
                  description="The tools I use while the project is being built." 
                  className="about-development" />}

                { currentPage === 'graphic' &&
                <CategoryPage
                  name="Graphic Design"
                  id='graphics'
                  description="Skills to help your site looks its best." 
                  className="about-graphic" />}

                { currentPage === 'testing' &&
                <CategoryPage
                  name="Project Testing"
                  id='testing'
                  description="Testing systems to make sure everything works as intended." 
                  className="about-testing" />}

                { currentPage === 'all' &&
                <FilterControls />}


            </div>
        </main>
    )
};