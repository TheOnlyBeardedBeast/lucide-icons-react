import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RotateCcw = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M3 2v6h6" />
      <path d="M3 13a9 9 0 103-7.7L3 8" />
    </svg>
  );
});

RotateCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RotateCcw.displayName = 'RotateCcw';

export default RotateCcw;
