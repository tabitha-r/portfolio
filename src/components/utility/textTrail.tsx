import React, { useRef } from 'react';
import { useTrail, a } from '@react-spring/web';

// Import visibility check utility
import { useOnScreen } from './onScreen';

// Define prop types
interface textTrailProps {
    children: React.ReactNode,
    className?: string
}

export function TextTrail(props: textTrailProps) {
  // useRef hook to mark component to be animated
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  // Boolean whether component is visible using imported utility
  const isVisible = useOnScreen(ref);

  // Items to be animated in
  const items = React.Children.toArray(props.children);

  // Trail effect config
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 120,
    height: 90,
    from: { opacity: 0, x: 120, height: 90 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={props.className} style={style} ref={ref}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
};