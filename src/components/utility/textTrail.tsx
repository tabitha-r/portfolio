import React from 'react';
import { useTrail, a } from '@react-spring/web';

interface textTrailProps {
    open: boolean;
    children: React.ReactNode,
    className?: string
}

export function TextTrail(props: textTrailProps) {
  const items = React.Children.toArray(props.children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: props.open ? 1 : 0,
    x: props.open ? 0 : 20,
    height: props.open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={props.className} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
};