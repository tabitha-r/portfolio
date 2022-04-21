import React from 'react';
import { Link } from 'react-router-dom';
import FloatingIcons from './floatingIcons';
import Logo from '../../media/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp, faThumbsUp } from '@fortawesome/pro-duotone-svg-icons';

export function Home() {

    return (
        <main className="page home">
            <div className="top-bar">
                <p>You can change the colour mode in this menu!</p>
                <FontAwesomeIcon 
                    icon={faArrowTurnUp}
                    className="identify-menu"
                />
            </div>

            <FloatingIcons />
            <section className="hero">
                <Logo className="logo" gradient size="400" />
                <h2>
                    Hi! I'm
                    <br />
                    <span className="title-name">Tabitha Riley</span>
                    <br />
                    and I make websites
                </h2>
            </section>

            <section className="cta-section">
                <div className="ctaContainer">
                    <p className="customerProblem">You shouldn't have to fight with a builder to get the site you want.</p>
                    <div className="bigCta">
                        <h3>You should only have to ask.</h3>
                        <Link to="/contact">
                            <button>
                                <FontAwesomeIcon 
                                    icon={faThumbsUp} 
                                    className="icon"
                                />
                                <span>Contact Now</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
};