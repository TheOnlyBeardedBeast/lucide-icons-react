import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PoundSterling = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 7c0-5.333-8-5.333-8 0" />
        <path d="M10 7v14" />
        <path d="M6 21h12" />
        <path d="M6 13h10" />
      </svg>
    </svg>
  );
});

PoundSterling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PoundSterling.displayName = 'PoundSterling';

export default PoundSterling;
