import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Globe2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15 21v-4a2 2 0 012-2h4" />
      <path d="M7 4v2a3 3 0 003 2h0a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h3" />
      <path d="M3 11h2a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
});

Globe2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Globe2.displayName = 'Globe2';

export default Globe2;
