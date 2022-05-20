import { useState, useEffect } from 'react';
import AccessibilityStatement from './accessibility';
import Disclaimer from './disclaimer';
import TermsConditions from './terms';
import PrivacyPolicy from './privacy';

interface LegalProps {
    activeSection: string | undefined;
}

export function LegalPage(props: LegalProps) {
    const [section, setSection] = useState('');

    useEffect(() => {
        if (props.activeSection === undefined) {
            setSection('');
        } else {
            setSection(props.activeSection);
        }
    }, [props.activeSection]);

    return (
        <main className="page legal-page">
            <button onClick={() => setSection('terms')}>Terms</button>
            <button onClick={() => setSection('privacy')}>Privacy</button>
            <button onClick={() => setSection('disclaimer')}>Disclaimer</button>
            <button onClick={() => setSection('accessibility')}>Accessibility</button>
            {section === 'terms' &&
                <TermsConditions />
            }
            {section === 'privacy' &&
                <PrivacyPolicy />
            }
            {section === 'disclaimer' &&
                <Disclaimer />
            }
            {section === 'accessibility' &&
                <AccessibilityStatement />
            }
            {section === '' &&
                <>
                    <p>Legal stoofs</p>
                </>
            }
        </main>
    )
};