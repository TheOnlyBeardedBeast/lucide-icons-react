import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MonitorSpeaker = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 20H8" />
        <path d="M17 9h.01" />
        <rect x="12" y="4" width="10" height="16" rx="2" />
        <path d="M8 6H4a2 2 0 00-2 2v6a2 2 0 002 2h4" />
        <circle cx="17" cy="15" r="1" />
      </svg>
    </svg>
  );
});

MonitorSpeaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MonitorSpeaker.displayName = 'MonitorSpeaker';

export default MonitorSpeaker;
