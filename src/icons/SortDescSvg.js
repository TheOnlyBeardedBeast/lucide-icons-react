import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SortDescSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 5h4" />
        <path d="M11 9h7" />
        <path d="M11 13h10" />
        <path d="M3 17l3 3 3-3" />
        <path d="M6 18V4" />
      </svg>
    </svg>
  );
});

SortDescSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortDescSvg.displayName = 'SortDescSvg';

export default SortDescSvg;
