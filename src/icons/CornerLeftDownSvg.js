import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CornerLeftDownSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <polyline points="14 15 9 20 4 15" />
        <path d="M20 4h-7a4 4 0 00-4 4v12" />
      </svg>
    </svg>
  );
});

CornerLeftDownSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerLeftDownSvg.displayName = 'CornerLeftDownSvg';

export default CornerLeftDownSvg;
