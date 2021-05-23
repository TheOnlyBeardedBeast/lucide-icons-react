import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownCircleSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 12 16 16 12" />
        <line x1="12" y1="8" x2="12" y2="16" />
      </svg>
    </svg>
  );
});

ArrowDownCircleSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownCircleSvg.displayName = 'ArrowDownCircleSvg';

export default ArrowDownCircleSvg;