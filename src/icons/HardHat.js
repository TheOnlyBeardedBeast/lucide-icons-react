import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HardHat = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z" />
      <path d="M10 10V5a1 1 0 011-1h2a1 1 0 011 1v5" />
      <path d="M4 15v-3a6 6 0 016-6h0" />
      <path d="M14 6h0a6 6 0 016 6v3" />
    </svg>
  );
});

HardHat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HardHat.displayName = 'HardHat';

export default HardHat;
