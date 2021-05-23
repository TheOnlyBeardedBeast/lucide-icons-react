import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CornerRightDownSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <polyline points="10 15 15 20 20 15" />
        <path d="M4 4h7a4 4 0 014 4v12" />
      </svg>
    </svg>
  );
});

CornerRightDownSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerRightDownSvg.displayName = 'CornerRightDownSvg';

export default CornerRightDownSvg;