import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ServerOffSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M7 2h13a2 2 0 012 2v4a2 2 0 01-2 2h-5" />
        <path d="M10 10L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 002 2h6z" />
        <path d="M22 17v-1a2 2 0 00-2-2h-1" />
        <path d="M4 14a2 2 0 00-2 2v4a2 2 0 002 2h16.5l1-.5.5.5-8-8H4z" />
        <path d="M6 18h.01" />
        <path d="M2 2l20 20" />
      </svg>
    </svg>
  );
});

ServerOffSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ServerOffSvg.displayName = 'ServerOffSvg';

export default ServerOffSvg;