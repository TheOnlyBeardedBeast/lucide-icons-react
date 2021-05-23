import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudSun = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M12 2v2" />
        <path d="M5.22 5.22l1.42 1.42" />
        <path d="M20 12h2" />
        <path d="M15.97 12.5A4 4 0 009.5 8.88" />
        <path d="M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z" />
        <path d="M17.36 6.64l1.42-1.42" />
      </svg>
    </svg>
  );
});

CloudSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSun.displayName = 'CloudSun';

export default CloudSun;
