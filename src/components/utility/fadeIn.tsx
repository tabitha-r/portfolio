import React, { useRef } from 'react';

// Import react-spring animation function/hook
import { animated, useSpring } from '@react-spring/web';

// Import utility to check if something is visible on onScreen
// Or has become visible on screen, eg. scrolled into view
import { useOnScreen } from './onScreen';

// Define prop types
interface FadeInProps {
    isVisible?: boolean,
    className?: string,
    onMouseEnter?: Function,
    onMouseLeave?: Function,
    children: React.ReactNode,
    fadeDistance?: number
}

export function FadeIn(props: FadeInProps) {
    // useRef hook to mark component to be watched/animated
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
    // Boolean whether component is visible using useOnScreen utility
    const isVisible = useOnScreen(ref);
    // Checks if fade distance has been supplied in props, provides default if not
    const fadeDistance = props.fadeDistance ? props.fadeDistance : 24;

    // Defines styles using react-spring if component is visible
    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : fadeDistance
    });

    // Returns a wrapper that can be wrapped around any component to fade in
    return (
        <animated.div style={styles} ref={ref} className={props.className} >
            {props.children}
        </animated.div>
    )
};