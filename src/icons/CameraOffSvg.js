import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CameraOffSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <line x1="2" y1="2" x2="22" y2="22" />
        <path d="M9.5 4h5L17 7h3a2 2 0 012 2v7.5M7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16" />
        <path d="M14.121 15.121A3 3 0 119.88 10.88" />
      </svg>
    </svg>
  );
});

CameraOffSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CameraOffSvg.displayName = 'CameraOffSvg';

export default CameraOffSvg;
