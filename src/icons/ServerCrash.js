import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ServerCrash = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M6 10H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2" />
      <path d="M6 14H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
      <path d="M13 6l-4 6h6l-4 6" />
    </svg>
  );
});

ServerCrash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ServerCrash.displayName = 'ServerCrash';

export default ServerCrash;
