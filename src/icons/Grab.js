import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Grab = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M18 11.5V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4" />
        <path d="M14 10V8a2 2 0 00-2-2v0a2 2 0 00-2 2v2" />
        <path d="M10 9.9V9a2 2 0 00-2-2v0a2 2 0 00-2 2v5" />
        <path d="M6 14v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0" />
        <path d="M18 11v0a2 2 0 114 0v3a8 8 0 01-8 8h-4a8 8 0 01-8-8 2 2 0 114 0" />
      </svg>
    </svg>
  );
});

Grab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Grab.displayName = 'Grab';

export default Grab;
