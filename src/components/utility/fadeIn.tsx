import React, { useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useOnScreen } from './onScreen';

interface FadeInProps {
    isVisible?: boolean;
    className?: string;
    children: React.ReactNode;
}

export function FadeIn(props: FadeInProps) {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
    const isVisible = useOnScreen(ref);

    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100
    });

    return (
        <animated.div style={styles} ref={ref} className={props.className} >
            {props.children}
        </animated.div>
    )
};