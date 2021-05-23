import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FlaskRound = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M10 2v7.31" />
        <path d="M14 9.3V1.99" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 11-4 0" />
        <path d="M5.58 16.5h12.85" />
      </svg>
    </svg>
  );
});

FlaskRound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FlaskRound.displayName = 'FlaskRound';

export default FlaskRound;
