import React from 'react';

// Import dayjs package to format dates
import dayjs from 'dayjs';

function GeneralAbout() {
    // Set current date
    const currentDate = dayjs();
    // Set date started studying (23/8/21)
    const startDate = dayjs('2021-08-23');
    // Determine day difference between current date and study start date 
    const daysSince = currentDate.diff(startDate, 'day');

    return (
        <div className="category-section">
            <section className="general-about">
                <h2 className="main-about-title">About</h2>
                <p>Hi! My name is Tabitha and I'm a web developer.</p>
                <p>I have been officially learning web development for {daysSince} days, but I've played around with it since my early teens.</p>
                <p>You can see some of the skills I've developed using the panel to the left.</p>
            </section>
        </div>
    )
};

export default GeneralAbout;