import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VibrateSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M2 8L4 10L2 12L4 14L2 16" />
        <path d="M22 8L20 10L22 12L20 14L22 16" />
        <rect x="8" y="5" width="8" height="14" rx="1" />
      </svg>
    </svg>
  );
});

VibrateSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VibrateSvg.displayName = 'VibrateSvg';

export default VibrateSvg;
