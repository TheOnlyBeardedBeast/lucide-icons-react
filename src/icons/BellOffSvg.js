import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BellOffSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M13.73 21a2 2 0 01-3.46 0" />
        <path d="M18.63 13A17.888 17.888 0 0118 8" />
        <path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14" />
        <path d="M18 8a6 6 0 00-9.33-5" />
        <path d="M2 2l20 20" />
      </svg>
    </svg>
  );
});

BellOffSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BellOffSvg.displayName = 'BellOffSvg';

export default BellOffSvg;
