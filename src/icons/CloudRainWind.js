import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudRainWind = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9" />
      <path d="M9.2 22l3-7" />
      <path d="M9 13l-3 7" />
      <path d="M17 13l-3 7" />
    </svg>
  );
});

CloudRainWind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudRainWind.displayName = 'CloudRainWind';

export default CloudRainWind;
