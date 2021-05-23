import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxSelectSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M4 2a2 2 0 00-2 2" />
        <line x1="8" y1="2" x2="10" y2="2" />
        <line x1="14" y1="2" x2="16" y2="2" />
        <path d="M4 22a2 2 0 01-2-2" />
        <line x1="22" y1="8" x2="22" y2="10" />
        <line x1="22" y1="14" x2="22" y2="16" />
        <path d="M22 20a2 2 0 01-2 2" />
        <line x1="14" y1="22" x2="16" y2="22" />
        <line x1="8" y1="22" x2="10" y2="22" />
        <path d="M20 2a2 2 0 012 2" />
        <line x1="2" y1="14" x2="2" y2="16" />
        <line x1="2" y1="8" x2="2" y2="10" />
      </svg>
    </svg>
  );
});

BoxSelectSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxSelectSvg.displayName = 'BoxSelectSvg';

export default BoxSelectSvg;
