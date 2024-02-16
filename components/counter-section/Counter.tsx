'use client';

import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

type Props = { end: number; decimals?: number };

const Counter = ({ end, decimals }: Props) => {
  return (
    <CountUp end={end || 100} duration={1.2} decimals={decimals || 0}>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span data-to={end} ref={countUpRef}>
            0
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
