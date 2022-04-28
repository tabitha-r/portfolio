import React, { useState, useEffect } from 'react';

/**
 * Function to determine whether something is visible on screen
 * @param ref React component useRef(), component that is being observed
 * @returns boolean whether component is visible on screen
 */
export function useOnScreen(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);
    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
        observer.observe(ref.current);
        return () => { observer.disconnect( )};
    }, []);

    return isIntersecting
};