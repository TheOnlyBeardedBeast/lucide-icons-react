import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SunsetSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M12 10V2" />
        <path d="M5.2 11.2l1.4 1.4" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="M17.4 12.6l1.4-1.4" />
        <path d="M22 22H2" />
        <path d="M16 6l-4 4-4-4" />
        <path d="M16 18a4 4 0 00-8 0" />
      </svg>
    </svg>
  );
});

SunsetSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SunsetSvg.displayName = 'SunsetSvg';

export default SunsetSvg;
