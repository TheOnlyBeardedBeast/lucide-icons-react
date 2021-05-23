import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BugSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <rect width="8" height="14" x="8" y="6" rx="4" />
        <path d="M19 7l-3 2" />
        <path d="M5 7l3 2" />
        <path d="M19 19l-3-2" />
        <path d="M5 19l3-2" />
        <path d="M20 13h-4" />
        <path d="M4 13h4" />
        <path d="M10 4l1 2" />
        <path d="M14 4l-1 2" />
      </svg>
    </svg>
  );
});

BugSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BugSvg.displayName = 'BugSvg';

export default BugSvg;
