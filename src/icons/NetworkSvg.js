import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const NetworkSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <rect x="9" y="2" width="6" height="6" />
        <rect x="16" y="16" width="6" height="6" />
        <rect x="2" y="16" width="6" height="6" />
        <path d="M12 8v4m0 0H5v4m7-4h7v4" />
      </svg>
    </svg>
  );
});

NetworkSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NetworkSvg.displayName = 'NetworkSvg';

export default NetworkSvg;
