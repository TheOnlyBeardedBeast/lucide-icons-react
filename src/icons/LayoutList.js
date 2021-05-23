import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LayoutList = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <rect x="3" y="14" width="7" height="7" />
        <rect x="3" y="3" width="7" height="7" />
        <line x1="14" y1="4" x2="21" y2="4" />
        <line x1="14" y1="9" x2="21" y2="9" />
        <line x1="14" y1="15" x2="21" y2="15" />
        <line x1="14" y1="20" x2="21" y2="20" />
      </svg>
    </svg>
  );
});

LayoutList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayoutList.displayName = 'LayoutList';

export default LayoutList;
