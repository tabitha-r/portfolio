import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

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

                <CSSTransition
                    classNames="carousel-primary"
                    in={currentPage === 'default'}
                    unmountOnExit
                    timeout={600}
                >
                    <GeneralAbout />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'basics'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Web Development Basics"
                      id='standard'
                      description="The golden trio of core building blocks of the web." 
                      className="about-basics" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'advanced'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Levelling Up Websites"
                      id='advanced'
                      description="Taking the core technologies up a notch." 
                      className="about-advanced" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'spa'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Single Page Applications"
                      id='spa'
                      description="Modern web at its finest." 
                      className="about-spa" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'wordpress'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Wordpress Development"
                      id='wordpress'
                      description="The languages and technologies used by 43% of the web." 
                      className="about-wordpress" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'backend'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Under the Hood"
                      id='backend'
                      description="Technologies used behind the scenes." 
                      className="about-backend" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'development'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Web Development Toolkit"
                      id='development'
                      description="The tools I use while the project is being built." 
                      className="about-development" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'graphic'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Graphic Design"
                      id='graphics'
                      description="Skills to help your site looks its best." 
                      className="about-graphic" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'testing'}
                    unmountOnExit
                    timeout={600}
                >
                    <CategoryPage
                      name="Project Testing"
                      id='testing'
                      description="Testing systems to make sure everything works as intended." 
                      className="about-testing" />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'all'}
                    unmountOnExit
                    timeout={600}
                >
                    <FilterControls />
                </CSSTransition>

            </div>
        </main>
    )
};