import React from 'react';
import { FadeIn } from '../../utility';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/pro-duotone-svg-icons';

function MainCta() {

    return (
        <section className="cta-section">
            <FadeIn className="cta-container" fadeDistance={100}>
                <p className="customer-problem">You shouldn't have to fight with a builder to get the site you want.</p>
                <div className="big-cta">
                    <h3>You should only have to ask.</h3>
                    <Link to="/contact">
                        <button>
                            <FontAwesomeIcon 
                                icon={faThumbsUp} 
                                className="icon"
                                aria-hidden
                            />
                            <span>Ask Today</span>
                        </button>
                    </Link>
                </div>
            </FadeIn>
        </section>
    )
};

export default MainCta;