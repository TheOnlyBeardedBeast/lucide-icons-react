import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CoinsSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <circle cx="8" cy="8" r="7" />
        <path d="M19.5 9.94a7 7 0 11-9.56 9.56" />
        <path d="M7 6h1v4" />
        <path d="M17.3 14.3l.7.7-2.8 2.8" />
      </svg>
    </svg>
  );
});

CoinsSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CoinsSvg.displayName = 'CoinsSvg';

export default CoinsSvg;
