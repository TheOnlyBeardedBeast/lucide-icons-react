import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SortDesc = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M11 5h4" />
      <path d="M11 9h7" />
      <path d="M11 13h10" />
      <path d="M3 17l3 3 3-3" />
      <path d="M6 18V4" />
    </svg>
  );
});

SortDesc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortDesc.displayName = 'SortDesc';

export default SortDesc;
