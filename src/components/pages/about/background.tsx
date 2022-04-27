import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { DesignerLifeSvg, WebDevelopmentSvg, ProudCoderSvg, CodeThinkingSvg, ReactSvg, WordpressSvg, MaintenanceSvg, VersionControlSvg, PenToolSvg, UsabilityTestingSvg } from '../../media';

interface backgroundProps {
    page: string;
}

function Background(props: backgroundProps) {
    const [currentPage, setCurrentPage] = useState(props.page);

    useEffect(() => {
        setCurrentPage(props.page);
    }, [props.page]);

    return (
        <div className="background-svg">
            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'default'}
                unmountOnExit
                timeout={1000}
            >
                <DesignerLifeSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'basics'}
                unmountOnExit
                timeout={1000}
            >
                <WebDevelopmentSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'advanced'}
                unmountOnExit
                timeout={1000}
            >
                <ProudCoderSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'spa'}
                unmountOnExit
                timeout={1000}
            >
                <ReactSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'wordpress'}
                unmountOnExit
                timeout={1000}
            >
                <WordpressSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'backend'}
                unmountOnExit
                timeout={1000}
            >
                <MaintenanceSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'development'}
                unmountOnExit
                timeout={1000}
            >
                <VersionControlSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'graphic'}
                unmountOnExit
                timeout={1000}
            >
                <PenToolSvg />
            </CSSTransition>

            <CSSTransition
                classNames="carousel-background"
                in={currentPage === 'testing'}
                unmountOnExit
                timeout={1000}
            >
                <UsabilityTestingSvg />
            </CSSTransition>
        </div>
    )
};

export default Background;