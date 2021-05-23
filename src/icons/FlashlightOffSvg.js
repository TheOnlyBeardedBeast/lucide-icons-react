import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FlashlightOffSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M16 16v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4" />
        <path d="M7 2h11v4c0 2-2 2-2 4v1" />
        <line x1="11" y1="6" x2="18" y2="6" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    </svg>
  );
});

FlashlightOffSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FlashlightOffSvg.displayName = 'FlashlightOffSvg';

export default FlashlightOffSvg;
