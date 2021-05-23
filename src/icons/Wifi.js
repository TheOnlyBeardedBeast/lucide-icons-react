import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wifi = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M5 13a10 10 0 0114 0" />
        <path d="M8.5 16.5a5 5 0 017 0" />
        <path d="M2 8.82a15 15 0 0120 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    </svg>
  );
});

Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wifi.displayName = 'Wifi';

export default Wifi;
