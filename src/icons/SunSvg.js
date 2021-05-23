import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SunSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M5 5l1.5 1.5" />
        <path d="M17.5 17.5L19 19" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M5 19l1.5-1.5" />
        <path d="M17.5 6.5L19 5" />
      </svg>
    </svg>
  );
});

SunSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SunSvg.displayName = 'SunSvg';

export default SunSvg;