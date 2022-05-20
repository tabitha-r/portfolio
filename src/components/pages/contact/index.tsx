import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCircleEnvelope, faPenCircle, faPaperPlane } from '@fortawesome/pro-duotone-svg-icons';

export function Contact() {

    return (
        <main className="page contact-page">
            <section>
                <h2>Contact</h2>
                <p>You can send me a message using this handy-dandy form.</p>
                <form action="https://formsubmit.co/contact@tabithariley.co.uk" method="POST">
                    <span className="formInput">
                      <label htmlFor="name">
                        <abbr title="Name"><FontAwesomeIcon
                          icon={faCircleUser}
                          className="formIcon" /></abbr>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required />
                    </span>
                    <br />
                    <span className="formInput">
                      <label htmlFor="email">
                        <abbr title="E-Mail Address"><FontAwesomeIcon
                          icon={faCircleEnvelope}
                          className="formIcon" /></abbr>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        required />
                    </span>
                    <br />
                    <span className="formInput">
                      <label htmlFor="message">
                        <abbr title="Message"><FontAwesomeIcon
                          icon={faPenCircle}
                          className="formIcon" /></abbr>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows={4}
                        required />
                    </span>
                    <br />
                    <button
                        type="submit"
                    >
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="buttonElement" />
                      <span className="buttonElement">Send</span>
                    </button>
                    <input type="hidden" name="_next" value="http://localhost:3000/contact/thanks"></input>
                    <input type="hidden" name="_subject" value="TRD: Contact Form Submission"></input>
                </form>
            </section>
        </main>
    )
};