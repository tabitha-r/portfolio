import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { WebDevelopmentSvg, ProudCoderSvg, CodeThinkingSvg, ReactSvg, WordpressSvg, MaintenanceSvg, VersionControlSvg, PenToolSvg, UsabilityTestingSvg } from '../../media';
import CategoryPage from './categoryPage';
import ChooseCategory from './chooseCategory';

type CategoryPage = 'default' | 'basics' | 'advanced' | 'spa' | 'wordpress' | 'backend' | 'development' | 'graphic' | 'testing' | 'all';

export function About() {
    const [currentPage, setCurrentPage] = useState('default');

    return (
        <main className="page about">
            <ChooseCategory setCurrentPage={setCurrentPage} />

            <div className="about-carousel">

                <CSSTransition
                    classNames="carousel-primary"
                    in={currentPage === 'default'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Me"
                      id='default'
                      description="I r programmer"
                      className="about-default"
                      background={<WebDevelopmentSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'basics'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Web Development Basics"
                      id='basics'
                      description="The golden trio of core building blocks of the web." 
                      className="about-basics"
                      background={<ProudCoderSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'advanced'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Levelling Up Websites"
                      id='advanced'
                      description="Taking the core technologies up a notch." 
                      className="about-advanced"
                      background={<CodeThinkingSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'spa'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Single Page Applications"
                      id='spa'
                      description="Modern web at its finest." 
                      className="about-spa"
                      background={<ReactSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'wordpress'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Wordpress Development"
                      id='wordpress'
                      description="The languages and technologies used by 43% of the web." 
                      className="about-wordpress"
                      background={<WordpressSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'backend'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Under the Hood"
                      id='backend'
                      description="Technologies used behind the scenes." 
                      className="about-backend"
                      background={<MaintenanceSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'development'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Web Development Toolkit"
                      id='development'
                      description="The tools and systems used while the project is being built." 
                      className="about-development"
                      background={<VersionControlSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'graphic'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Graphic Design"
                      id='graphic'
                      description="Skills to help your site looks its best." 
                      className="about-graphic"
                      background={<PenToolSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'testing'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="Project Testing"
                      id='testing'
                      description="Testing systems to make sure everything works as intended." 
                      className="about-testing"
                      background={<UsabilityTestingSvg />} />
                </CSSTransition>

                <CSSTransition
                    classNames="carousel-secondary"
                    in={currentPage === 'all'}
                    unmountOnExit
                    timeout={500}
                >
                    <CategoryPage
                      name="All"
                      id=''
                      description="" 
                      className="about-all" />
                </CSSTransition>

            </div>
        </main>
    )
};