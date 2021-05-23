import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SnowflakeSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M20 16l-4-4 4-4" />
        <path d="M4 8l4 4-4 4" />
        <path d="M16 4l-4 4-4-4" />
        <path d="M8 20l4-4 4 4" />
      </svg>
    </svg>
  );
});

SnowflakeSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SnowflakeSvg.displayName = 'SnowflakeSvg';

export default SnowflakeSvg;
