import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudMoon = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z" />
      <path d="M9.95 9a6.13 6.13 0 015.5-5.18 4.77 4.77 0 006.67 6.67A6.13 6.13 0 0119.46 15" />
    </svg>
  );
});

CloudMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudMoon.displayName = 'CloudMoon';

export default CloudMoon;
